import React from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import {useRouter} from "next/router";
import axios from "axios";
import {url} from "../../utils/config";
import CountryCard from "../../components/CountryCard";

function Country(props) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                <CountryCard country={props?.country} />
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
    )
}

export async function getStaticPaths() {

    const countriesData = await axios.get(`${url}all`);
    const countries = await countriesData.data

    const paths = countries.filter(x => x["capital"] !== "").map((country) => ({
        params: { id: country["capital"] },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const countryData = await axios.get(`${url}capital/${params.id}`);
    const country = await countryData.data

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            country,
        },
    }
}

export default Country;
