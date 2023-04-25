import Head from "next/head";
import Image from "next/image";
import _ from "lodash";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const ImageCom = () => {
  return (
    <div>
      <img src="https://reactnative.dev/img/tiny_logo.png" />
      <div className={styles.content}>
        <span>Title</span>
        <span>Description</span>
      </div>
    </div>
  );
};

const ROW = 2;
const COL = 4;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {_.map(_.range(0, COL), (value, index) => (
          <div className={styles.grid} key={`col-${index}`}>
            {_.map(_.range(0, ROW), (val, i) => (
              <ImageCom key={`row-${index}-${i}`} />
            ))}
          </div>
        ))}
      </main>
    </>
  );
}
