import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>
            <Head>
            <title>Projare | Share your Projects </title>
            <meta name="Description" content="this is a project that allows users to share their projects, what they used to create their projects, and the status of their projects." />
            </Head>
            <div className={styles.titleContainer}>
                <img className={styles.titlePic} src="/projareexp.svg" alt="Projare icon" />
                <h1 className={styles.titleText}>Projare</h1>
            </div>
            <div className={styles.featureContainerContainer}>
                <div className={styles.featureContainer}>
                    <img className={styles.carouselPic} src="/cards.jpeg" />
                    <p className={styles.description} >share your projects, what youre using to create their projects, and the status of your projects</p>
                </div>
                <Link href="/api/auth/login" passHref><div className={styles.enter}><button className={styles.enterText}>Enter</button></div></Link>
            </div>

            <br />
            <br />

            <div className={styles.footerContainer}>
                <h2 className={styles.footerText}>Made using NextJS + FaunaDB + Vercel</h2>
            </div>
        </>
    )
}