import Layout from "../components/Layout";
const MyApp = ({ Component, pageProps, initialTheme }) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};
MyApp.getInitialProps = async ({ Component, router, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  /* your own logic */

  return { pageProps };
};

export default MyApp;
