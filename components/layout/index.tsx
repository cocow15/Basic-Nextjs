import {ReactNode} from 'react';
import Header from "../header";
import Footer from "../footer";
import styles from './Layout.module.css'
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps){
    const { children, pageTitle } = props;
    return(
        <>
            <Head>
                <title>LMS | {pageTitle}</title>
                <meta name="description" content="Website LMS JTK"/>
            </Head>
            <div className={styles.container}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )

}