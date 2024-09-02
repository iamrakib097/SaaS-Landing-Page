import TestimonialCard from "../components/TestimonialCard";
import testimonialsData from "../data/testimonialData";
import SectionTitle from "../components/SectionTitle";
import SectionPara from "../components/SectionPara";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(function () {
    function getDeviceWidth() {
      setDeviceWidth(window.innerWidth);
    }
    getDeviceWidth();
    window.addEventListener("resize", getDeviceWidth);
    return function () {
      window.removeEventListener("resize", getDeviceWidth);
    };
  }, []);
  const data =
    deviceWidth < 640
      ? testimonialsData.slice(0, 3)
      : deviceWidth < 1024
      ? testimonialsData.slice(0, 6)
      : testimonialsData;
  return (
    <section className="mt-20 overflow-x-clip">
      <div className="flex flex-col justify-center items-center">
        <div className="tag">Testimonials</div>
        <SectionTitle title={"What our users say"} />
        <div className="px-5 mt-5">
          <p className="lg:w-[400px]  text-center text-[20px] leading-[30px] tracking-tight  text-[#010D3E]">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </p>
        </div>

        <div className=" px-5 max-container grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          {data.map((value) => (
            <TestimonialCard
              key={value.username}
              text={value.text}
              imageSrc={value.imageSrc}
              name={value.name}
              username={value.username}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
