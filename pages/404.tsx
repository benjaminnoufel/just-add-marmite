import Head from "next/head";
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => router.push("/"), 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <div className="not-found">
            <Head>
                <title>404 Not Found</title>
                <meta property="og:title" content="404 Not Found" key="title" />
                <meta name="description" content="This page was not found" />
                <meta property="og:description" content="This page was not found" key="description" />
            </Head>
            <h1>404</h1>
            <h2>Ooops ! That page cannot be found :(</h2>
            <p>Redirecting to <Link href="/">Homepage</Link> for mor marmite goodness...</p>

            <style jsx>{`
            .not-found {
                background: #fff;
                padding: 30px;
                box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                transform: rotateZ(-1deg);
            }
            h1 {
                font-size: 3em;
            }
      `}</style>
        </div>
    );
};

export default NotFound;
