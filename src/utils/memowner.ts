import { BrowserProvider, parseEther } from "ethers";
import { memAddress } from "../constants/mem";

export async function joinMembership(): Promise<"success" | "error"> {
  try {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return "error";
    }

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Send 0.01 ETH to the membership contract
    const tx = await signer.sendTransaction({
      to: memAddress,
      value: parseEther("0.01"),
    });

    await tx.wait(); // Wait for confirmation
    return "success";
  } catch (error) {
    console.error("joinMembership failed:", error);
    return "error";
  }
}
