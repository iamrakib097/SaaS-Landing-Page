import cogImage from "../assets/cog.png";
import cylinderImage from "../assets/cylinder.png";
import noodleImage from "../assets/noodle.png";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#FFFFFF_100%)] overflow-x-clip max-container">
      <div className="container">
        <div className="md:flex items-center">
          <div className=" md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text">Learn More &rarr;</button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <img
              src={cogImage}
              alt="cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 xl:left-60"
            />
            <img
              src={cylinderImage}
              alt="cylender image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <img
              src={noodleImage}
              alt=""
              width={220}
              height={220}
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg] xl:left-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
