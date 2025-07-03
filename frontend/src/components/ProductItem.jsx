import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, description }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="product-item-card block text-black cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
    >
      {/* Product Image Container: Ensures uniform height for all images */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden">
        {/*
          'h-56' or 'h-64' creates a fixed height for the image area.
          'object-cover' will make the image fill this space, cropping if its aspect ratio differs.
          This is crucial for uniform grid appearance. Adjust 'h-56'/'h-64' based on your preferred image height.
        */}
        <img
          src={image[0]} // Use the first image from the array
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Details Section - Aligned and Padded */}
      <div className="p-4 flex flex-col justify-between items-center text-center flex-grow">
        {/* Product Name */}
        <p className="text-gray-800 text-lg md:text-xl font-bold uppercase mb-2 truncate w-full">
          {name}
        </p>

        {/* Product Description */}
        {description && (
          <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {/* Price Section - Always at the bottom, consistently styled */}
        <div className="mt-auto w-full">
          <p className="inline-block bg-[#CC0C39] text-white py-2 px-4 rounded-md font-bold text-lg leading-none">
            <span className="text-sm mr-0.5">{currency}</span>
            <span className="text-xl md:text-2xl">{price}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;