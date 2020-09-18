import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import SearchInput from "../components/Filters";
import CountryList from "../components/CountryList";
import axios from "axios";
import {url} from "../utils/config";

function Home(props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                <SearchInput />
                <CountryList countries={props?.countries} />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const countriesData = await axios.get(`${url}all`);
    const countries = await countriesData.data

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            countries: countries.filter(x => x["capital"] !== "" && x["capital"].indexOf(" ") >= 0),
        },
    }
}

export default Home;
