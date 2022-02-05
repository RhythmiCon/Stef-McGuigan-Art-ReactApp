import Head from "next/head";
import HomePageHeader from "../components/HomePageHeader/HomePageHeader";
import ViewWorkButton from "../components/ViewWorkButton/ViewWorkButton";
import styles from "../styles/Home.module.css";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Stef McGuigan Art</title>
            <meta name="description" content="The art of Stef McGuigan" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="homepage">
            <Head>
               <title>Stef McGuigan Art</title>
               <meta name="description" content="The art of Stef McGuigan" />
               <link rel="icon" href="../public/images/iconImage.JPG" />
            </Head>
            <div className={styles.container}>
               <HomePageHeader />
               <ViewWorkButton />
            </div>
         </div>
      </div>
   );
}
