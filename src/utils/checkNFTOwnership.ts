import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../constants/contract";

export const checkNFTOwnership = async (walletAddress: string): Promise<boolean> => {
  try {
    if (!window.ethereum) {
      throw new Error("Ethereum provider is not available");
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

    const balance = await contract.balanceOf(walletAddress);
    return balance > 0;
  } catch (error) {
    console.error("Error checking NFT ownership:", error);
    return false;
  }
};
