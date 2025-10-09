import { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const filterToggleButton = document.getElementById(
        "mobile-filter-toggle-button"
      );
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        (!filterToggleButton || !filterToggleButton.contains(event.target))
      ) {
        setIsFilterSidebarOpen(false);
      }
    };
    if (isFilterSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterSidebarOpen]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSelectedSubCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [value]
    );
  };

  const applyFiltersAndSearch = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedSubCategories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        selectedSubCategories.includes(item.subCategory)
      );
    }

    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFiltersAndSearch();
  }, [
    selectedCategories,
    selectedSubCategories,
    search,
    showSearch,
    products,
    sortType,
  ]);

  return (
    <div className="w-full py-8 md:py-12">
      <div className="flex flex-col sm:flex-row gap-6 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Filter Section (Sidebar) */}
        <div className="w-full sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
          {/* Mobile Filter Toggle Button */}
          <button
            id="mobile-filter-toggle-button"
            onClick={() => setIsFilterSidebarOpen(!isFilterSidebarOpen)}
            className="sm:hidden flex items-center justify-between w-full py-3 px-4 mb-4 bg-gray-100 border border-gray-300 rounded-md text-lg font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              alt="Toggle Filters"
              className={`h-4 transition-transform duration-300 ${isFilterSidebarOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Desktop Filter Sidebar & Mobile Overlay */}
          <div
            ref={sidebarRef}
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out sm:relative sm:transform-none sm:shadow-none sm:border-r sm:border-gray-200 sm:pb-0 ${isFilterSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } sm:translate-x-0 sm:block`}
          >
            {/* Close button for mobile sidebar */}
            <div className="sm:hidden flex items-center justify-between p-4 border-b border-gray-200">
              <p className="text-xl font-bold">FILTERS</p>
              <button
                onClick={() => setIsFilterSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <img
                  src={assets.cross_icon}
                  alt="Close Filters"
                  className="h-5 w-5"
                />
              </button>
            </div>

            {/* Category Filter */}
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <p className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                Categories
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {
                  ["Men", "Women", "Equipment", "Kids"].map((cat) => (
                    <label
                      key={cat}
                      className="inline-flex items-center cursor-pointer hover:text-gray-800"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={toggleCategory}
                        checked={selectedCategories.includes(cat)}
                        className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition-colors"
                      />
                      <span className="ml-2">{cat}</span>
                    </label>
                  ))
                }
              </div>
            </div>

            {/* SubCategory Filter */}
            <div className="p-4 sm:p-5">
              <p className="mb-4 text-sm font-semibold text-gray-700 uppercase">
                Type
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {
                  ["Bat", "Ball", "Wicket"].map((subCat) => (
                    <label
                      key={subCat}
                      className="inline-flex items-center cursor-pointer hover:text-gray-800"
                    >
                      <input
                        type="checkbox"
                        value={subCat}
                        onChange={toggleSubCategory}
                        checked={selectedSubCategories.includes(subCat)}
                        className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 transition-colors"
                      />
                      <span className="ml-2">{subCat}</span>
                    </label>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          {isFilterSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
              onClick={() => setIsFilterSidebarOpen(false)}
            ></div>
          )}
        </div>

        {/* Products Display Area */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
            </div>

            {/* Products Sort */}
            <div className="relative flex-shrink-0 ml-4">
              <select
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
                className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="relavent">Sort By: Relavent</option>
                <option value="low-high">Sort By: Price: Low to High</option>
                <option value="high-low">Sort By: Price: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Map Products */}
          {filteredProducts.length > 0 ? (
            // Changed grid classes to show 4 products on md screens and up, 2 on sm, 1 on base
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
              {filteredProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-600 text-lg">
              <p>No products match your current filters.</p>
              <p className="mt-2">Try adjusting your selections!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
