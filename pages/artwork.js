import AllContent from "../components/AllContent/AllContent";
import Sidebar from "../components/Sidebar/Sidebar";
import css from "../styles/Artwork.module.css";

export default function Artwork() {
   return (
      <div className={css.all_content}>
         <Sidebar />
         <div className={css.image_content}>
            <AllContent />;
         </div>
      </div>
   );
}
