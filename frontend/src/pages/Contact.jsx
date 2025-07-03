import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center text-3xl font-bold mb-8 border-b pb-4">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className="flex flex-col md:flex-row md:gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="Contact Us"
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
        />
        <div className="flex flex-col justify-center items-start mt-6 md:mt-0">
          <h2 className="font-semibold text-2xl text-gray-800">Our Store</h2>
          <p className="text-gray-600 mb-4">
            700001 Kolkata <br />
            Saltlake, Newtown, West Bengal, India
          </p>
          <p className="text-gray-600 mb-4">
            Tel:{" "}
            <a href="tel:+919875632401" className="text-blue-500">
              +91 9875632401
            </a>{" "}
            <br />
            <a href="mailto:admin@crickkit.com" className="text-blue-500">
              admin@crickkit.com
            </a>
          </p>
          <h3 className="font-semibold text-xl text-gray-800 mt-6">
            Careers at CrickKit
          </h3>
          <p className="text-gray-600 mb-6">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black bg-transparent px-8 py-3 text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
