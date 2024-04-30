export default {
  contracts: {
    "contracts/Fun.sol:Fun": {
      abi: [
        {
          inputs: [{ internalType: "uint256", name: "_x", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [{ internalType: "uint256", name: "_x", type: "uint256" }],
          name: "changeX",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "x",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      bin: "6080604052348015600e575f80fd5b506040516100fd3803806100fd833981016040819052602b916031565b5f556047565b5f602082840312156040575f80fd5b5051919050565b60aa806100535f395ff3fe6080604052348015600e575f80fd5b50600436106030575f3560e01c80630c55699c1460345780639435337e14604d575b5f80fd5b603b5f5481565b60405190815260200160405180910390f35b605c6058366004605e565b5f55565b005b5f60208284031215606d575f80fd5b503591905056fea26469706673582212204b3052fd8976881e53c50d7a62346e46e7648feb3d21d8f5a3a695370831999c64736f6c63430008190033",
    },
  },
  version: "0.8.25+commit.b61c2a91.Darwin.appleclang",
} as const;
