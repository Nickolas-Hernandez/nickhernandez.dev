import { Header } from './components/header';
import { CustomHead } from './components/head';
import { Footer } from './components/footer';

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
    </>
  )
}
