import Image from "next/image";
import Link from "next/link";
import logo from 'public/nhLogo.svg';

export const Header = () => {
  return (
    <header>
      <div className="contain">
        <nav>
          <Image src={logo} alt="Nick Hernandez Logo" />
          <Link href="#contact"><button className="style-3">Contact</button></Link>
        </nav>
      </div>
    </header>
  );
}
