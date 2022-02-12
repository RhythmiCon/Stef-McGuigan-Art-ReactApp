import css from "./ContentRowA.module.css";
import Image from "next/image";

export default function ContentRowA({ src1, src2, src3, src4 }) {
   return (
      <div className={css.content_row}>
         <div className={css.image_wrapper}>
            <Image
               src={src1}
               alt="graphic art piece"
               height={400}
               width={350}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src2}
               alt="graphic art piece"
               height={500}
               width={350}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src3}
               alt="graphic art piece"
               height={400}
               width={350}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src4}
               alt="graphic art piece"
               height={500}
               width={350}
            />
         </div>
      </div>
   );
}
