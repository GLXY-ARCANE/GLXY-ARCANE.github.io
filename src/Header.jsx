import glxy from './assets/720x300.glxy.png'
import { useState } from "react";    

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
      
    return (
        <header className="header">
            <div className="logo">
                <img src={glxy} alt="GLXY_ARCANE Logo" />
            </div>
            <nav className={menuOpen ? "nav open" : "nav"}>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Goals</a></li>
                </ul>
            </nav>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
        </header>
        );
      }

export default Header