import Head from "next/head";
import Link from "next/link";
import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren<any>) {
    return (
        <div className="layout">
            <Head>
                <title>Just add marmite</title>
                <meta property="og:site_name" content="Just Add Marmite" />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:url" content="https://justaddmarmite.benjaminnoufel.com/" />
                <meta name="description" content="This a pedagogic project for learning next.js" />
                <meta property="og:description" content="This a pedagogic project for learning next.js" key="description" />
                <meta property="og:image" content="/primary.jpg" key="image" />
            </Head>
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <span>Just Add</span>
                            <span>Marmite</span>
                        </h1>
                        <h2>Spread The Joy</h2>
                    </a>
                </Link>
            </header>

            <div className="page-content">
                { children }
            </div>

            <footer>
                <p>Copyright {new Date().getFullYear()} Just Add Marmite :)</p>
            </footer>
        </div>
    );
}
