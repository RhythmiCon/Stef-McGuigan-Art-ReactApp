import Link from "next/link";
import css from "./Sidebar.module.css";

export default function Sidebar() {
   return (
      <div className={css.sidebar}>
         <Link href="/">
            <a>← Return to Front Page</a>
         </Link>
      </div>
   );
}
