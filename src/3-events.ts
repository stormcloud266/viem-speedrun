import { Hex, createWalletClient, getContract, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";
import funJson from "../artifacts/Fun";

import dotenv from "dotenv";

const { abi } = funJson["contracts"]["contracts/Fun.sol:Fun"];

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(privateKey as Hex);
const contractAddress = "0x1faeb776befc1b7cffe051948469d899eee40746";

(async () => {
  const client = await createWalletClient({
    account,
    transport: http(process.env.API_URL),
    chain: sepolia,
  });

  const contract = await getContract({
    address: contractAddress,
    abi,
    client,
  });

  await contract.watchEvent.XWasChanged({
    onLogs: (logs) => console.log(logs),
  });

  let x = 55n;
  setInterval(async () => {
    x++;
    await contract.write.changeX([x]);
  }, 3000);
})();
