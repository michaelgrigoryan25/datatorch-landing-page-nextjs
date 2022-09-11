import Document, { Html, NextScript, Head, Main } from "next/document";

export default class _Document extends Document {
  public render(): JSX.Element {
    return (
      <Html className="h-screen">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main>
          <Main />
        </main>

        <NextScript />
      </Html>
    );
  }
}
