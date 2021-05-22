import "../styles/globals.scss";
import Layout from "../components/Layout";

const MyApp = ({Component, pageProps}: {Component: any, pageProps: any}) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default MyApp;
