import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (products.length) {
        setLatestProducts(products.slice(0, 10));
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [products]);

  return (
    <section className="container mx-auto px-4 my-12 md:my-16"> {/* Added container, auto margins, and more padding */}
      {/* Enhanced Title Section */}
      <div className="text-center mb-8 md:mb-12"> {/* Increased bottom margin */}
        <Title text1="LATEST" text2="COLLECTION" />
        <div className="w-24 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div> {/* Accent line */}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          {/* Professional Loading Spinner */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-gray-600 text-lg">Loading amazing gear...</p>
        </div>
      ) : (
        <>
          {latestProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10">
              {latestProducts.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-600 text-lg">
              <p>No new products to display right now.</p>
              <p className="mt-2">Check back soon for exciting additions!</p>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default LatestCollection;