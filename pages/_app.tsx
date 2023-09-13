import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Header from "./PageLayout/Header";
// import MobileNav from "./PageLayout/MobileNav";
import Contact from "./Components/Contactcomponent";

function MyApp({ Component, pageProps }: AppProps) {
  // Add that code to _app.tsx / _app.jsx

  return (
    <>
      <Header />
      {/* <DeskHead /> */}
      <Component {...pageProps} />
      {/* <MobileNav /> */}
      <Contact />
    </>
  );
}

export default MyApp;
