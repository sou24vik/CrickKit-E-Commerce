import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Relatedproducts from "../components/Relatedproducts";
import OurPolicy from "../components/OurPolicy";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate(); // Use useNavigate hook

  const [productData, setProductData] = useState(null); // Initialize as null
  const [mainImage, setMainImage] = useState(""); // Renamed for clarity
  const [selectedSize, setSelectedSize] = useState(""); // Renamed for clarity

  const buyNowClickHandler = () => {
    if (selectedSize) {
      navigate(`/product/${productId}/buy-now`);
    } else {
      toast.error("Please select a size before proceeding.");
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setMainImage(foundProduct.image[0]); // Set initial main image
      } else {
        // Handle case where product is not found (e.g., redirect to 404 or collection)
        console.warn("Product not found for ID:", productId);
        // navigate('/collection'); // Example redirect
      }
    }
  }, [productId, products]); // Add products to dependency array

  if (!productData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-xl text-gray-700">Loading product details...</p>
      </div>
    );
  }

  return (
    // Outer container for consistent padding across the page, removed border-t-2
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data Section - Flex container for image and info */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        {/* Product Image Gallery */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-4 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto lg:h-[calc(100vh-200px)] lg:max-h-[600px] justify-start lg:justify-normal w-full lg:w-24 gap-3 scrollbar-hide">
            {productData.image.map((item, index) => (
              <img
                src={item}
                alt={`Product thumbnail ${index + 1}`}
                key={index}
                onClick={() => setMainImage(item)}
                className={`w-[23%] sm:w-[18%] lg:w-full h-auto object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ease-in-out ${
                  item === mainImage
                    ? "border-red-500 shadow-md"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full lg:flex-1 h-96 sm:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-4 lg:mb-0">
            <img
              src={mainImage}
              alt={productData.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* -------- Product info --------- */}
        <div className="flex-1 w-full lg:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1.5 mb-4 text-sm text-gray-600">
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img src={assets.star_icon} alt="Star" className="w-4 h-4" />
            <img
              src={assets.star_dull_icon}
              alt="Dull Star"
              className="w-4 h-4"
            />
            <p className="ml-1">(122 Reviews)</p>
          </div>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-base">
            {productData.description}
          </p>
          {productData.sizes && productData.sizes.length > 0 && (
            <div className="mb-8">
              <p className="text-lg font-semibold text-gray-800 mb-3">
                Select Size:
              </p>
              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(item)}
                    className={`py-2.5 px-6 rounded-full border border-gray-300 text-base font-medium transition-all duration-200 ease-in-out
                      ${
                        selectedSize === item
                          ? "bg-red-600 text-white border-red-600 shadow-md scale-105"
                          : "bg-white text-gray-800 hover:bg-gray-100 hover:border-gray-400"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => addToCart(productData._id, selectedSize)}
              className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 text-lg font-semibold rounded-md shadow-lg
                         hover:bg-gray-800 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedSize} // Disable if no size is selected
            >
              ADD TO CART
            </button>
            <button
              onClick={() => buyNowClickHandler()}
              className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3.5 text-lg font-semibold rounded-md shadow-lg
                         hover:bg-red-700 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedSize} // Disable if no size is selected
            >
              BUY NOW
            </button>
          </div>
          <hr className="my-8 border-gray-200" /> {/* Thicker, clearer hr */}
          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <img
                src={assets.check_icon}
                alt="Check"
                className="w-4 h-4 text-green-500"
              />{" "}
              <strong>100% Original Product:</strong> Guaranteed quality and
              authenticity.
            </p>
            <p className="flex items-center gap-2">
              <img
                src={assets.truck_icon}
                alt="Truck"
                className="w-4 h-4 text-blue-500"
              />{" "}
              <strong>Cash On Delivery:</strong> Available for eligible
              locations.
            </p>
            <p className="flex items-center gap-2">
              <img
                src={assets.refresh_icon}
                alt="Refresh"
                className="w-4 h-4 text-purple-500"
              />{" "}
              <strong>Easy Returns:</strong> Hassle-free return and exchange
              policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      {/* ------ Description and review Section ------------ */}
      <div className="mt-20">
        <div className="flex border-b border-gray-200 mb-6">
          {" "}
          {/* Moved border to bottom for cleaner look */}
          <button className="px-6 py-3 text-base font-semibold text-gray-800 border-b-2 border-red-600 -mb-px bg-gray-50">
            {" "}
            {/* Active tab style */}
            Description
          </button>
          <button className="px-6 py-3 text-base font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
            Reviews (122)
          </button>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg text-base text-gray-700 leading-relaxed shadow-sm">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            quibusdam sunt dolor maiores. Distinctio, optio dolore architecto
            voluptatibus tenetur, sapiente iure, impedit minima quos nostrum,
            cupiditate ipsum explicabo nemo magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            debitis, quas quod cupiditate laudantium porro animi amet rerum!
            Nisi, sint impedit. Odio, laboriosam architecto vitae sapiente,
            deleniti consequuntur.
          </p>
        </div>
      </div>
      {/* ----------- Display related products -------------- */}
      <Relatedproducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
      <OurPolicy />{" "}
      {/* Moved OurPolicy to the end if it's a global footer-like component */}
    </div>
  );
};

export default Product;
