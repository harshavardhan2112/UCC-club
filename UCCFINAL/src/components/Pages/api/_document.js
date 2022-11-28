import { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const originalRenderPage = ctx.renderPage
      return{...initalProps}
    }
render(){
  return (
    <Html>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/fontawesome.min.css" integrity="sha384-z4tVnCr80ZcL0iufVdGQSUzNvJsKjEtqYZjiQrrYKlpGow+btDHDfQWkFjoaz/Zr" crossorigin="anonymous" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}

export default MyDocument