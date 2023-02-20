import Link from "next/link";
import Image from "next/image";
import linkedin from "public/linkedin.svg";
import whiteGithub from "public/whiteGithub.svg";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font pb-5 pt-8 lg:pt-10">
      <div className="contain">
        <div className="wrapper mb-2 md:mb-0">
          <Link className="flex items-center justify-center md:justify-start  md:mr-4 mb-2 md:mb-0" href="https://github.com/Nickolas-Hernandez" target="_blank" rel="noreffer"><Image src={whiteGithub} className="mr-2" alt="Link to GitHub profile" width={16} height={16} />Gitub</Link>
          <Link className="flex items-center justify-center md:justify-start" href="https://www.linkedin.com/in/nickolashernandez/" target="_blank" rel="noreffer"><Image src={linkedin} className="mr-2" alt="Link to Linkedin Page" width={16} height={16} />Linkedin</Link>
        </div>
        <Link className="flex items-center nic" href="https://www.nicmorey.com" target="_blank" rel="noreffer">Designed by Nic Morey</Link>
      </div>
    </footer>
      );
};
