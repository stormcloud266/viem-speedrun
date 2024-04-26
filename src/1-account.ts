import { Hex, createPublicClient, formatEther, http, parseEther } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { sepolia } from "viem/chains";

import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_URL = process.env.API_URL;

const account = privateKeyToAccount(PRIVATE_KEY as Hex);

(async () => {
  const client = createPublicClient({
    chain: sepolia,
    transport: http(API_URL),
  });

  const balance = await client.getBalance({
    address: account.address,
  });

  console.log(formatEther(balance));

  const nonce = await client.getTransactionCount({
    address: account.address,
  });

  console.log(nonce);
})();
