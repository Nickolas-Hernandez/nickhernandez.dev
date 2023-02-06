import Link from "next/link";

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="contain">
        <div className="wrapper">
          <p className="text-xl opacity-75">Hi, my name is</p>
          <h1 className=" text-5xl lg:text-6xl font-bold">Nick Hernandez</h1>
          <h1 className="text-5xl lg:text-6xl font-normal mb-5">and I build on the web.</h1>
          <p className="opacity-75 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat quae nemo eligendi numquam alias?</p>
          <Link href="#contact" className="mr-1"><button>Say Hello</button></Link>
          <Link href="#about-me"><button className="style-2">About Me</button></Link>
        </div>
      </div>
    </section>
  );
};
