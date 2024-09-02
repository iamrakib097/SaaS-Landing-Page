import logo from "../assets/logosaas.png";
import menu from "../assets/menu.svg";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 max-container">
      <div className="flex justify-center items-center bg-black text-white py-3 text-sm gap-3">
        <p className="hidden md:block text-white/60">
          Streamline your workflow and boost your productivity
        </p>
        <p>Get Started for free &rarr;</p>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <img src={logo} alt="saas logo" width={40} height={40} />
          <img
            src={menu}
            alt="saas logo"
            width={40}
            height={40}
            className="md:hidden"
          />
          <nav className="hidden md:flex gap-6 text-black/60 items-center bg-transparent">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Update</a>
            <a href="#">Help</a>
            <Button text={"Get for free"} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
