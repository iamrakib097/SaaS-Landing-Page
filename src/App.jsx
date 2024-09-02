import { CallToAction } from "./sections/CallToAction";
import Ecosystem from "./sections/Ecosystem";
import { Footer } from "./sections/Footer";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { LogoTicker } from "./sections/LogoTicker";
import { Pricing } from "./sections/Pricing";
import { ProductShowcase } from "./sections/ProductShowcase";
import Testimonials from "./sections/Testimonials";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Ecosystem />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;
