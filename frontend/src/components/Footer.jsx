const Footer = () => {
  return (
    <div className="bg-blue-400 w-full py-5 mt-10 mb-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-10 text-sm">
        <div className="flex-1">
          <p className="w-full md:w-2/3 pl-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-4 pl-4">COMPANY</h3>
          <ul className="flex flex-col gap-1 pl-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-4 pl-4">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-1 pl-4">
            <li>
              <a href="tel:+9101211120987" className="hover:underline">
                +91-0121-112-0987
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@cricbazaar.com"
                className="hover:underline"
              >
                contact@cricbazaar.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-gray-600 my-6" />
      <p className="text-sm text-center">
        &copy; 2024 crickkit.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
