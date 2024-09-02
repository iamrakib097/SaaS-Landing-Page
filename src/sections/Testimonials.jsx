import TestimonialCard from "../components/TestimonialCard";
import testimonialsData from "../data/testimonialData";
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [deviceWidth, setDeviceWidth] = useState(null);

  useEffect(() => {
    function getDeviceWidth() {
      setDeviceWidth(window.innerWidth);
    }
    getDeviceWidth();
    window.addEventListener("resize", getDeviceWidth);
    return () => {
      window.removeEventListener("resize", getDeviceWidth);
    };
  }, []);

  const data =
    deviceWidth < 640
      ? testimonialsData.slice(0, 3)
      : deviceWidth < 1024
      ? testimonialsData.slice(0, 6)
      : testimonialsData;

  const itemHeight = 300; // Adjust based on the actual height of each item, including margin/padding
  const gridHeight = itemHeight * Math.ceil(data.length / 3); // Number of rows in the grid
  const totalHeight = gridHeight; // Single height for seamless scrolling

  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    height: "400px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const motionDivStyle = {
    display: "flex",
    flexDirection: "column",
    height: `${gridHeight * 2}px`, // Ensure the height accommodates both sets of content
  };

  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="tag">Testimonials</div>
        <SectionTitle title={"What our users say"} />
        <div className="px-5 mt-5">
          <p className="lg:w-[400px] text-center text-[20px] leading-[30px] tracking-tight text-[#010D3E]">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </p>
        </div>

        <div
          style={containerStyle}
          className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
        >
          <motion.div
            style={motionDivStyle}
            animate={{ y: [`0px`, `-${gridHeight}px`] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* Duplicate the testimonials to ensure smooth scrolling */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {data.map((value) => (
                <TestimonialCard
                  key={`${value.username}-duplicate`}
                  text={value.text}
                  imageSrc={value.imageSrc}
                  name={value.name}
                  username={value.username}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
