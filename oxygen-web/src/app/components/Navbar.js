"use client"; // This is a client component 👈🏽
import "../styles/navbar.css";
import { useState } from "react";
import logoNav from "../../../public/assets/images/logo.png"
import Image from 'next/image';


function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <Image src={logoNav} alt="Oxygen" className="brand-name" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/proyecto"> Proyecto </a>
          </li>
          
          <li>
            <a href="/comprar" style={{color: "black"}} >Comprar</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
