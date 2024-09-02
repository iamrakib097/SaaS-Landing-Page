import EcoCard from "../components/EcoCard";
import SectionPara from "../components/SectionPara";
import SectionTitle from "../components/SectionTitle";
import features from "../data/feature";

const Ecosystem = () => {
  return (
    <section className="flex justify-center items-center pt-20">
      <div className="flex flex-col justify-center items-center text-center max-w-[1200px] w-full">
        <button className="tag">Everything you need</button>
        <div className="max-w-[540px] mx-auto">
          <SectionTitle title={`Streamlined for easy management`} />

          <SectionPara
            para={`Enjoy customizable lists, teamwork tools, and smart tracking all in one place.
            Set tasks, get reminders, and see your progress simply and quickly.`}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-6 justify-center items-center w-full">
          {features.map((feature, index) => (
            <EcoCard
              key={index}
              image={feature.image}
              title={feature.title}
              para={feature.para}
              className="w-[300px] h-[300px] flex-shrink-0 flex-grow-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
