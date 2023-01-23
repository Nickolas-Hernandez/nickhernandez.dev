import Head from "next/head";

type Props = {
  children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Nick Hernandez | Web Developer</title>
      </Head>
      <main>
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
      </main>
      <div className="gradient-3"></div>
    </>
  )
}
