// this file gets loaded for all of our pages
// @ts-nocheck
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
// ! Enable Google Analytics from _document,_app & /lib/gtag.js
// import { GA_TRACKING_ID } from 'lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head />

        {/* trust pilot */}
        {/* <!-- TrustBox script --> */}

        {/* <!-- End TrustBox script --> */}

        {/* <!--=============== SWIPER CSS ===============--> */}
        {/* <link rel="stylesheet" href="./swiper-bundle.min.css" /> */}

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />

        {/* boxicons */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />

        {/* google analytics */}
        <link rel="manifest" href="/manifest.json" />
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${GA_TRACKING_ID}',{
              page_path: window.location.pathname,
            });
            `,
          }}
        ></script> */}

        {/* google font poppins */}

        {/* config link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* google font Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* google font Abril Fatface */}
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />

        {/*google font source serrif pro for titles / headings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        {/*  */}

        <title>Portfolio Application</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="view" content="width-device-width, initial-scale=1.0" />
        <meta name="author" content="Kshitiz" />
        <meta name="description" content="Portfolio Builder Application" />
        <meta name="keywords" content="portfolio, builder, application" />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

module.exports = MyDocument;
