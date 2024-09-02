import PricingCard from "../components/PricingCard";
import SectionPara from "../components/SectionPara";
import SectionTitle from "../components/SectionTitle";
import PricingPlan from "../data/PricingPlan";
export const Pricing = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col justify-center items-center p-5">
        <SectionTitle title={"Pricing"} />

        <p className="md:w-[400px]  text-center text-[22px] leading-[30px] tracking-tight mt-5 text-[#010D3E]">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
        <div className="lg:flex gap-4 lg:items-end">
          {PricingPlan.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              monthlyPrice={plan.monthlyPrice}
              buttonText={plan.buttonText}
              popular={plan.popular}
              inverse={plan.inverse}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
