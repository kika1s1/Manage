const Header = () => {
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
      </div>
    </nav>
  );
};

export default Header;
