/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 md:px-10 border-b border-gray-200">
      <h1 className="text-xl md:text-3xl font-bold flex items-center justify-center gap-3 text-[rgba(245,71,71,0.99)]">
        <span>Let's start your cricketing journey with</span>
        <Link to="/" aria-label="Home">
          <img
            src={assets.logo}
            className="w-32 h-auto md:w-40 md:h-auto object-contain"
            alt="Cricket Zone Logo"
          />
        </Link>
      </h1>
    </div>
  );
};

export default Header;