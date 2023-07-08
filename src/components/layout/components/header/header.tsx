import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from 'public/nhLogo.svg';

export const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    const $html = document.querySelector('html');
    if(menuStatus === true) {
      $html?.classList.remove('overflow-hidden');
    } else {
      $html?.classList.add('overflow-hidden');
    }
    setMenuStatus(!menuStatus);
  }

  return (
    <header>
      <div className="contain">
        <Image className="logoImage" src={logo} alt="Nick Hernandez Logo" />
        <nav className={menuStatus ? 'open' : ''}>
          <ul className="main-nav">
            <li><Link href="#about-me">About</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="https://github.com/Nickolas-Hernandez" target="_blank">GitHub</Link></li>
          </ul>
          <Link href="mailto:contact@nickhernandez.dev" className="lg:hidden"><button className="style-3">Contact</button></Link>
        </nav>
        <Link href="mailto:contact@nickhernandez.dev" className="hidden lg:block"><button className="style-3">Contact</button></Link>
        <div className={`menu-button ${menuStatus ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line line-top"></span>
          <span className="line line-center"></span>
          <span className="line line-bottom"></span>
        </div>
      </div>
    </header>
  );
}
