// this file gets loaded for all of our pages
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

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

        <script
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
        ></script>
        <title>Portfolio Application</title>
        <meta charSet="utf-8" />
        <meta name="veiwport" content="width-device-width, initial-scale=1.0" />
        <meta name="author" content="Kshitiz" />
        <meta name="description" content="Portfolio Builder Application" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

module.exports = MyDocument;
