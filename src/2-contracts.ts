import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import funJson from "../artifacts/Fun";

import dotenv from "dotenv";

const { abi, bin } = funJson["contracts"]["contracts/Fun.sol:Fun"];

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey as Hex);

(async () => {
  const client = createWalletClient({
    account,
    chain: sepolia,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const hash = await client.deployContract({
    abi,
    bytecode: `0x${bin}`,
    args: [123n],
  });

  const { contractAddress } = await client.waitForTransactionReceipt({ hash });

  if (contractAddress) {
    const contract = getContract({
      client,
      address: contractAddress,
      abi,
    });

    const x = await contract.read.x();
    console.log("x: ", x);

    const changeXHash = await contract.write.changeX([140n]);

    const tx = await client.waitForTransactionReceipt({ hash: changeXHash });

    const x2 = await contract.read.x();
    console.log("x2: ", x2);
  }
})();
