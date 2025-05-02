import NFTCard from "../components/NFTcard";
import "../index.css";

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to the NFT Hub</h1>
      <div className="nft-grid">
        <NFTCard title="CryptoArt #1" image="/nft1.png" />
        <NFTCard title="CryptoArt #2" image="/nft2.png" />
        <NFTCard title="Rare Token" image="/nft3.png" />
        <NFTCard title="Art Block" image="/nft4.png" />
      </div>
    </div>
  );
}
