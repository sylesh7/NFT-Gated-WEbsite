import { useNavigate } from "react-router-dom";
import { checkNFTOwnership } from "../utils/checkNFTOwnership";

const ConnectWallet = () => {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to continue.");
      return;
    }

    try {
      // Request wallet connection
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = accounts[0];
      console.log("✅ Connected Wallet:", walletAddress);

      // Call backend smart contract function
      const balance = await checkNFTOwnership(walletAddress);
      console.log("🎯 NFT Balance from Contract:", balance);

      // Check if user owns NFT (balance > 0)
      if (balance > 0) {
        navigate("/home");
      } else {
        alert("❌ Access Denied: You do not own the required NFT.");
      }

    } catch (err) {
      console.error("🚨 Wallet connection failed:", err);
      alert("Something went wrong while connecting. Check the console for details.");
    }
  };

  return (
    <div className="connect-wallet-page" style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
      <h2>Connect Wallet</h2>
      <button onClick={connectWallet}>Connect</button>
    </div>
  );
};

export default ConnectWallet;
