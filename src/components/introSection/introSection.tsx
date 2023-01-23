import Link from "next/link";

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="contain">
        <p className="text-xl">Hi, my name is</p>
        <h1 className="text-6xl font-bold">Nick Hernandez</h1>
        <h1 className="text-6xl font-normal">and I build on the web.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat quae nemo eligendi numquam alias?</p>
        <Link href="#contact"><button>Say Hello</button></Link>
      </div>
    </section>
  );
};
