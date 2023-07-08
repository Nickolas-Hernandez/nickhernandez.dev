import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/igb1fgp.css" />
        <link rel="shortcut icon" href="/nhLogo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Analytics />
    </Html>
  )
}
