import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Gated NFT Website</h1>
      <button onClick={() => navigate("/connect")} className="button">
        Login
      </button>
    </div>
  );
}
