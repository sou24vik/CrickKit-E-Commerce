import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const TotalAmount = ({ amount }) => {
  const { currency, delivery_fee } = useContext(ShopContext);

  const amountNumber = parseInt(amount);
  const deliveryFeeNumber = parseInt(delivery_fee);

  const totalAmount = amountNumber + deliveryFeeNumber;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>

          <p>
            {currency} {amountNumber}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {totalAmount}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default TotalAmount;
