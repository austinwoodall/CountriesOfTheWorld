import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import SearchInput from "../../components/Filters";
import CountryList from "../../components/CountryList";
import {useRouter} from "next/router";
import axios from "axios";
import {url} from "../../utils/config";

function Country() {
    const router = useRouter();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        getCountryInfo().then(res => setCountry(res.data))
    }, [])

    const getCountryInfo = async () => {
        const countryData = await axios.get(`${url}${router.query.id}`);
        return countryData;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
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

export default Country;
