import { useRef } from "react";
import productImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import tubeImage from "../assets/tube.png";
import ProductInfo from "../components/ProductInfo";
import SectionPara from "../components/SectionPara";
import SectionTitle from "../components/SectionTitle";
import dataArray from "../data/dataArray";
import { motion, useScroll, useTransform } from "framer-motion";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="max-container bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 container overflow-x-clip    "
    >
      <div className="  flex justify-center items-center flex-col text-center">
        <div className="max-w-[540px] mx-auto">
          <div className="tag">Boost your productivity</div>
          <SectionTitle title={"A more effective way to track Progress"} />
          <SectionPara
            para={`Effortlessly turn your ideas into a fully functional,responsive, no-code
      SaaS website in just minutes with the set of free components for Fremer.`}
          />
        </div>
        <div className="relative">
          <img src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage}
            alt="pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-[89px] xl:-right-[70px] xl:top-[210px] lg:top-[120px]"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage}
            alt="tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute -left-[100px] md:bottom-[500px] lg:bottom-[300px] xl:bottom-[500px] xl:-left-[80px] bottom-24 "
            style={{ translateY }}
          />
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  md:items-center md:px-[70px] lg:px-5 2xl:px-20 xl:px-10">
            {dataArray.map((item, index) => (
              <ProductInfo
                key={index}
                icon={item.icon}
                title={item.title}
                para={item.para}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
