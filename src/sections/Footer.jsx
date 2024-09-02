import logo from "../assets/logosaas.png";
import instaIcon from "../assets/social-insta.svg";
import linkedinIcon from "../assets/social-linkedin.svg";
import pinIcon from "../assets/social-pin.svg";
import xIcon from "../assets/social-x.svg";
import youtubeIcon from "../assets/social-youtube.svg";

const footerData = [
  {
    section: "Product",
    links: ["Features", "Integrations", "Updates", "FAQ", "Pricing"],
  },
  {
    section: "Company",
    links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
  },
  {
    section: "Resources",
    links: ["Examples", "Community", "Guides", "Docs"],
  },
  {
    section: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export const Footer = () => {
  return (
    <section className="max-container mt-20 lg:mt-[240px]">
      <div className="p-5 bg-black text-slate-400 py-10">
        <div className="w-[40px] h-[41px] relative">
          <div className="absolute inset-[1px] rounded-4 bg-gradient-to-r from-[#F87BFF] via-[#F892CF] via-[#FFDD98] via-[#C2F0B1] to-[#2FD8FE] blur-sm"></div>
          <img
            src={logo}
            alt="Logo"
            width={40}
            height={41}
            className="relative z-10"
          />
        </div>
        <p className="mt-4 w-[300px]">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </p>
        <div className="flex space-x-4 mt-6 mb-20">
          <img
            src={xIcon}
            alt="X Icon"
            width={24}
            height={24}
            className="filter invert contrast-0 brightness-0"
          />
          <img
            src={instaIcon}
            alt="Instagram Icon"
            width={24}
            height={24}
            className="filter invert contrast-0 brightness-0"
          />
          <img
            src={pinIcon}
            alt="Pinterest Icon"
            width={24}
            height={24}
            className="filter invert contrast-0 brightness-0"
          />
          <img
            src={linkedinIcon}
            alt="LinkedIn Icon"
            width={24}
            height={24}
            className="filter invert contrast-0 brightness-0"
          />
          <img
            src={youtubeIcon}
            alt="YouTube Icon"
            width={24}
            height={24}
            className="filter invert contrast-0 brightness-0"
          />
        </div>
        <div className="md:flex md:justify-between">
          {footerData.map((data) => (
            <div
              key={data.section}
              className="flex flex-col gap-4 mt-10 md:mt-0"
            >
              <p className="text-white font-bold">{data.section}</p>
              <div className="flex flex-col gap-3">
                {data.links.map((link, index) => (
                  <a key={index} href="#" className="cursor-pointer">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
