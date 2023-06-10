import Script from 'next/script'
import './globals.scss'
import { Inter } from 'next/font/google'
import Image from './marketing.jpg'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Gotely | Strategy generation by AI and CW1 experts.',
  description: 'Unlock smart AI-driven business strategies with our app. Boost growth, optimize resources & unlock potential. Take your business to the next level, today!',
  metadataBase: new URL('https://blog.gotely.com'),
  generator: 'Next.js',
  applicationName: 'Gotely',
  referrer: 'origin-when-cross-origin',
  keywords: ['Gotely', 'CW1', 'Business Strategy'],
  authors: [{ name: 'Pedro Stark' }, { name: 'Mia Española' }, { name: 'CW1' }],
  creator: 'CW1 Inc',
  publisher: 'CW1 Inc',
  openGraph: {
    title: 'Gotely | Strategy generation by AI and CW1 experts.',
    description: 'Unlock smart AI-driven business strategies with our app. Boost growth, optimize resources & unlock potential. Take your business to the next level, today!',
    type: 'article',
    publishedTime: '2023-01-01T00:00:00.000Z',
    authors: ['CW1']
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gotely | Strategy generation by AI and CW1 experts.',
    description: 'Unlock smart AI-driven business strategies with our app. Boost growth, optimize resources & unlock potential. Take your business to the next level, today!',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="clarit"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(c,l,a,r,i,t,y){
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ffs8p8eefs");`}} />
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <meta name="keywords" content={"Strategy, AI,AI generated, business strategy, corporate strategy, business analysis, business idea validator"} />
        <meta name="author" content={"CW1"} />
        {/* <meta property="og:title" content={"Gotely | Strategy generation by AI and CW1 experts."} />
        <meta property="og:description" content={"Unlock smart AI-driven business strategies with our app. Boost growth, optimize resources & unlock potential. Take your business to the next level, today!"} />
        <meta property="og:image" content={Image} />
        <meta property="og:url" content={"https://wwww.gotely.com"} />
        <meta property="og:image:alt" content="About Acme" /> */}

        <meta name="twitter:title" content={"Gotely | Strategy generation by AI and CW1 experts."} />
        <meta name="twitter:site" content="https://www.gotely.com" />
        <meta name="twitter:description" content={"Unlock smart AI-driven business strategies with our app. Boost growth, optimize resources & unlock potential. Take your business to the next level, today!"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={Image} />
        {/* <meta name="twitter:image:type" content="/imagines/marketing.jpg" />
        <meta name="twitter:image:width" content="/imagines/marketing.jpg" />
        <meta name="twitter:image:height" content="/imagines/marketing.jpg" /> */}
        <meta property="og:image:alt" content="About Acme" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
