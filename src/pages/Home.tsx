import { useLocation } from "react-router-dom";
import NFTCard from "../components/NFTcard";
import "../index.css";

export default function Home() {
  const location = useLocation();
  const walletAddress = location.state?.walletAddress;

  return (
    <div className="page">
      <h1 className="home-title">Welcome to the NFT Hub</h1>

      {walletAddress && (
        <p className="wallet-info">
          Connected Wallet: <span className="wallet-address">{walletAddress}</span>
        </p>
      )}

      <div className="nft-grid">
        <NFTCard title="CryptoArt #1" image="/nft1.png" />
        <NFTCard title="CryptoArt #2" image="/nft2.png" />
        <NFTCard title="Rare Token" image="/nft3.png" />
        <NFTCard title="Art Block" image="/nft4.png" />
      </div>
    </div>
  );
}
