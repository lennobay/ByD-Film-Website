import { useNavigate } from "react-router";
import "./navbar.css";
import { useState } from "react";
import { createPortal } from "react-dom";
export default function Navbar() {
  const [overlay, setOverlay] = useState(0);
  const navigate = useNavigate();
  if (overlay == 0) {
    return (
      <div className="navbar">
        <div className="header-title">
          <h2 onClick={() => navigate("/")}>ByD Film</h2>
        </div>
        <div className="header-choose-desktop">
          <a onClick={() => navigate("/")}>
            <p>Home</p>
          </a>
          <a onClick={() => navigate("/collections")}>
            <p>Kollektionen</p>
          </a>
          <a onClick={() => navigate("/veranstaltungen")}>
            <p>Veranstaltungen</p>
          </a>
        </div>
        <div className="header-choose-mobile">
          <i onClick={() => setOverlay(1)} className="fa-solid fa-bars"></i>
        </div>
      </div>
    );
  } else if (overlay == 1) {
    return createPortal(
      <div className="mobile-menu">
        <i className="fa-solid fa-x" onClick={() => setOverlay(0)}></i>
        <div className="mobile-menu-sub">
          <a onClick={() => navigate("/")}>
            <p>Home</p>
          </a>
          <a onClick={() => navigate("/collections")}>
            <p>Kollektionen</p>
          </a>
          <a  onClick={() => navigate("/veranstaltungen")}>
            <p>Veranstaltungen</p>
          </a>
        </div>
      </div>,
      document.body,
    );
  }
}
