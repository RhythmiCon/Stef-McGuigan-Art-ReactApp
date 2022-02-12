import css from "./ContentRowB.module.css";
import Image from "next/image";

export default function ContentRowB({ src1, src2, src3, src4 }) {
   return (
      <div className={css.content_row}>
         <div className={css.image_wrapper}>
            <Image
               src={src1}
               alt="graphic art piece"
               height={420}
               width={400}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src2}
               alt="graphic art piece"
               height={500}
               width={400}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src3}
               alt="graphic art piece"
               height={420}
               width={400}
            />
         </div>
         <div className={css.image_wrapper}>
            <Image
               src={src4}
               alt="graphic art piece"
               height={500}
               width={400}
            />
         </div>
      </div>
   );
}
