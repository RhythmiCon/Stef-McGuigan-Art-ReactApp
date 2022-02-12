import ContentRowA from "../ContentRowA/ContentRowA";
import ContentRowB from "../ContentRowB/ContentRowB";
import css from "./ContentBlock.module.css";

export default function ContentBlock() {
   return (
      <div className={css.content_block_one}>
         <ContentRowA
            src1={"/images/050EAAF2-8F40-459E-9CAF-215AF439901D.JPG"}
            src2={"/images/166C10FB-B626-4F75-AE1B-B59A1059DF03.JPG"}
            src3={"/images/1B8254D1-6A46-4E7B-88D3-7F1F6E31C6BB.JPG"}
            src4={"/images/2A3051CE-2564-4785-B5BE-E89D0572AD23.JPG"}
         />
         <ContentRowB
            src1={"/images/3C10FD5F-9EA0-40CD-94DC-EF39BE2C6140.JPG"}
            src2={"/images/57F3119A-25D3-44D0-BE40-DEB1A41827BD.JPG"}
            src3={"/images/6B9B5E8E-AE73-4D47-965E-E69EBB49B698.JPG"}
            src4={"/images/8580695A-36F6-4757-A842-9A9CEFF64260.JPG"}
         />
         <ContentRowA
            src1={"/images/B424A083-3EAB-45C7-A03A-824D798C4A0C.JPG"}
            src2={"/images/8F94CBEE-7987-4847-A654-581224A56850.JPG"}
            src3={"/images/914C4218-53B5-4FFC-A0AF-14E75E065AB1.JPG"}
            src4={"/images/9491C26D-9DAF-428C-9735-34B1CC922665.JPG"}
         />
         <ContentRowB
            src1={"/images/B5D0144A-2641-4ED3-86D8-E55650BBCC01.JPG"}
            src2={"/images/BD0FA4E7-57E6-43AB-A144-35F2B79E3E21.JPG"}
            src3={"/images/C4845ED0-9242-4414-9064-F1B4ED8B747A.JPG"}
            src4={"/images/DD9FB45C-D0B0-443A-B40E-30AD5629E7D4.JPG"}
         />
      </div>
   );
}
