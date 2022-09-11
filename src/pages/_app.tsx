import "~/styles/reset.css";
import "~/styles/pattern.css";
import "~/styles/tailwind.css";

import type { AppProps } from "next/app";
import { Fragment } from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default App;
