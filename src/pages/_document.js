import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* Adds Any meta tag in head for global page rendering */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
