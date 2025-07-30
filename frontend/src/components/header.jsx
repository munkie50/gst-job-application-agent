// src/components/Header.jsx
import { Link } from "react-router-dom";
import "./header.css";
import logoIcon from "../assets/images/logo-icon.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <span className="logo-text">JobberNaut</span>
          <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
        </Link>
      </div>
    </header>
  );
}
