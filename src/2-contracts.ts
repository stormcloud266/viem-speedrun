import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import funJson from "../artifacts/Fun.json";

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
  });

  const { contractAddress } = await client.waitForTransactionReceipt({ hash });

  if (contractAddress) {
    const x = await client.readContract({
      address: contractAddress,
      abi,
      functionName: "x",
    });

    console.log(x);
  }
})();
