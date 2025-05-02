import { useNavigate } from "react-router-dom";
import { checkNFTOwnership } from "../utils/checkNFTOwnership";

const ConnectWallet = () => {
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const walletAddress = accounts[0];

    const ownsNFT = await checkNFTOwnership(walletAddress);

    if (ownsNFT) {
      navigate("/home");
    } else {
      alert("Access Denied: You do not own the required NFT.");
    }
  };

  return (
    <div className="connect-wallet-page">
      <h2>Connect Wallet</h2>
      <button onClick={connectWallet}>Connect</button>
    </div>
  );
};

export default ConnectWallet;
