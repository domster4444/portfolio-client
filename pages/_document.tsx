import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

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
