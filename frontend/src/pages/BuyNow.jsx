import { useContext, useState } from "react";
import Title from "../components/Title";
import TotalAmount from "../components/TotalAmount";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

const BuyNow = () => {


  const [method, setMethod] = useState("cod");
  const [quantity, setQuantity] = useState(1);

  const {
    navigate,
    backendUrl,
    token,
    Delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };


  const productId = useParams();
  const actualProductId = productId.productId;

  const product = products.find(
    (item) => String(item._id) === String(actualProductId)
  );

  const amount = product ? product.price * quantity : 0;

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <form className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* --------- Left side -------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            placeholder="Pin Code"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="min-w-80">
          <label
            htmlFor="Quantity"
            className="mt-4 font-mono text-blue-600 gap-1 text-xl"
          >
            Quantity :
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            className="border-2 border-blue-500 rounded py-1.5 px-3.5 w-16 sm:w-20 sm:max-w-20 max-w-full m-4"
          />

          <TotalAmount amount={amount} />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />
          {/* ------ Payment Method Selection */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""
                  }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""
                  }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""
                  }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BuyNow;
