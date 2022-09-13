import "~/styles/reset.css";
import "~/styles/pattern.css";
import "~/styles/tailwind.css";

import type { AppProps } from "next/app";
import { Fragment } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </Fragment>
  );
}

export default App;
