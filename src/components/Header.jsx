import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Use the current state value directly
  };

  return (
    <nav className="relative container p-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="logo.svg" alt="" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-darkGrayishBlue" href="#">
            Pricing
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            About Us
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Services
          </a>
          <a className="hover:text-darkGrayishBlue" href="#">
            Community
          </a>
        </div>
        {/* button */}
        <a
          className=" hidden md:block baseline hover:bg-brightRedLight text-white rounded-full px-6 p-3 pt-2 bg-brightRed"
          href="#"
        >
          Get Started
        </a>
        {/* <!-- Hamburger Icon --> */}
        <button
          onClick={toggleMenu}
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute ${isOpen ? "flex" : "hidden"}  flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
