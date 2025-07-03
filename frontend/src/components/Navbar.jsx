import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Renamed 'visible' for clarity

  const {
    setShowSearch,
    showSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setIsSidebarOpen(false); // Close sidebar on logout
  };

  const navLinkClasses = ({ isActive }) =>
    `relative py-2 px-3 text-lg font-medium transition-colors duration-300 ${
      isActive
        ? "text-blue-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-[2px] after:bg-blue-600" // Active link style
        : "text-gray-700 hover:text-blue-500" // Default and hover style
    }`;

  const sidebarNavLinkClasses = ({ isActive }) =>
    `py-3 pl-8 border-b border-gray-100 text-lg transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-700 font-semibold"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-10 bg-white shadow-sm border-b border-gray-100">
      {/* Logo */}
      <Link to="/" aria-label="Home">
        <img src={assets.logo} alt="Cricket Zone Logo" className="w-36 md:w-40" />
      </Link>

      {/* Primary Navigation Links (Desktop) */}
      <ul className="hidden sm:flex items-center gap-6 md:gap-8">
        <li>
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className={navLinkClasses}>
            Collection
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Action Icons */}
      <div className="flex items-center gap-5 md:gap-7">
        <img
          src={assets.search_icon}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
          className="w-5 md:w-6 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 md:w-6 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
          />

          {token && (
            <div className="group-hover:block absolute hidden right-0 mt-3 w-40 bg-white rounded-md shadow-lg py-2 z-10 transition-all duration-200 ease-in-out origin-top-right scale-95 group-hover:scale-100">
              <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                My Profile
              </p>
              <p
                onClick={() => { navigate("/orders"); setIsSidebarOpen(false); }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                Orders
              </p>
              <hr className="my-1 border-gray-100" />
              <p
                onClick={logout}
                className="block px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
              >
                Log out
              </p>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative" aria-label="Shopping Cart">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 md:w-6 min-w-5 opacity-75 hover:opacity-100 transition-opacity"
          />
          {getCartCount() > 0 && (
            <p className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-center text-xs bg-red-500 text-white rounded-full">
              {getCartCount()}
            </p>
          )}
        </Link>

        {/* Hamburger Menu Icon (Mobile) */}
        <img
          onClick={() => setIsSidebarOpen(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 md:w-7 cursor-pointer sm:hidden opacity-75 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-white shadow-xl transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0 w-64" : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="flex items-center gap-4 p-4 border-b border-gray-200 cursor-pointer text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-5 rotate-90" /> {/* Rotated for "close" feel */}
            <p className="text-lg font-medium">Close</p>
          </div>

          {/* Sidebar NavLinks */}
          <div className="flex flex-col flex-grow py-2">
            <NavLink
              onClick={() => setIsSidebarOpen(false)}
              className={sidebarNavLinkClasses}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setIsSidebarOpen(false)}
              className={sidebarNavLinkClasses}
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setIsSidebarOpen(false)}
              className={sidebarNavLinkClasses}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setIsSidebarOpen(false)}
              className={sidebarNavLinkClasses}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;