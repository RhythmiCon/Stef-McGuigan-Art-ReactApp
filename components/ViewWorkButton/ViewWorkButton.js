import styles from "./ViewWorkButton.module.css";
import Link from "next/link";

export default function ViewWorkButton() {
   return (
      <div className={styles.container}>
         <div className={styles.button}>
            <Link href="/artwork">
               <a>View My Work</a>
            </Link>
         </div>
      </div>
   );
}
