import Button from "../components/Button";
import SectionPara from "../components/SectionPara";
import SectionTitle from "../components/SectionTitle";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
export const CallToAction = () => {
  return (
    <section className="mt-40 max-container overflow-x-clip">
      <div className="px-5 flex flex-col justify-center items-center relative">
        <div className="px-20">
          <SectionTitle title={`Sign up for free today`} />
        </div>
        <div className="md:px-10 lg:px-60 2xl:px-[300px]">
          <SectionPara
            para={`Celebrate the joy of accomplishment with 
            an app designed to track your progress and motivate your efforts.`}
          />
        </div>
        <div className="space-x-4 mt-6">
          <Button type="primary" text="Get for free" />
          <Button type="text" text="Learn more" />
        </div>
        <div className="hidden md:block absolute md:-top-36 md:-left-64 lg:-left-4 lg:-top-20 2xl:-left-4 2xl:-top-20">
          <img
            src={starImage}
            alt="star image"
            width={362}
            height={362}
            className=""
          />
        </div>
        <img
          src={springImage}
          alt="spring image"
          width={362}
          height={362}
          className="hidden md:block absolute md:-right-32 md:top-10 lg:-right-0 lg:top-32"
        />
      </div>
    </section>
  );
};