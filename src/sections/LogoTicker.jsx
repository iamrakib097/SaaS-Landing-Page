import acmeLogo from "../assets/logo-acme.png";
import quantumLogo from "../assets/logo-quantum.png";
import echoLogo from "../assets/logo-echo.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import apexLogo from "../assets/logo-apex.png";
export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white md:px-5">
      <div className="">
        <div className="flex overflow-hidden mask justify-center items-center">
          <div className="flex gap-14 flex-none">
            <img src={acmeLogo} alt="acme logo" className="logo-ticker-image" />
            <img
              src={quantumLogo}
              alt="quantum logo"
              className="logo-ticker-image"
            />
            <img src={echoLogo} alt="echo logo" className="logo-ticker-image" />
            <img
              src={celestialLogo}
              alt="celestial logo"
              className="logo-ticker-image"
            />
            <img
              src={pulseLogo}
              alt="pulse logo"
              className="logo-ticker-image"
            />
            <img src={apexLogo} alt="apex logo" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </section>
  );
};
