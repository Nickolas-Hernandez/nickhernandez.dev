import Link from "next/link";
import Image from "next/image";
import linkedin from "public/linkedin.svg";
import github from "public/github.svg";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font pb-5">
      <div className="contain">
        <div className="wrapper mb-4 md:mb-0">
          <Link className="flex items-center md:mr-4" href="https://github.com/Nickolas-Hernandez" target="_blank" rel="noreffer"><Image src={github} className="mr-2" alt="Link to github proffile" width={20} height={20} />GitHub</Link>
          <Link className="flex items-center" href="https://www.linkedin.com/in/nickolashernandez/" target="_blank" rel="noreffer"><Image src={linkedin} className="mr-2" alt="Link to Linkedin Page" width={20} height={20} />Linkedin</Link>
        </div>
        <Link className="flex items-center nic" href="https://www.nicmorey.com" target="_blank" rel="noreffer">Designed by Nic Morey</Link>
      </div>
    </footer>
      );
};
