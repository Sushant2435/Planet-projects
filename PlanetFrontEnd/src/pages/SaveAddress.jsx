/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Address.css";

import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrder,
  fetchPaymentDetails,
} from "../features/createOrder/createOrderSlice";
import { buyNow } from "../features/BuyNow/buyNowSlice";

const SaveAddress = ({ data, handleDelete, handleOnEdit }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for the button

  const { cartItems } = useSelector((state) => state.cart);
  const { buynow } = useSelector((state) => state.buynow);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleCreateOrderAndFetchPayment = async (orderData, addressId) => {
    console.log(
      orderData,
      "order data from this handleCreateOrderAndFetchPayment function",
      addressId
    );

    // Check if orderData contains cart data or single product data
    const isCartData = orderData?.cart?.cartItems?.length > 0;

    let products;
    let orderAmount;

    if (isCartData) {
      // Extract products from cart data
      products = orderData.cart.cartItems.map((product) => ({
        productId: product.productId._id,
        quantity: product.quantity,
        size: product.size,
      }));

      orderAmount = orderData?.orderSummary?.totalPrice; // Use totalPrice from cart summary
    } else {
      // Extract products from single product data
      products = [
        {
          productId: orderData[0]?.productItem?._id,
          quantity: orderData[0]?.quantity,
          size: orderData[0]?.selectedSize,
        },
      ];

      orderAmount = orderData[0]?.orderSummary?.totalPrice; // Use totalPrice from single product summary
    }

    const orderPayload = {
      addressId: addressId,
      products,
    };
    setLoading(true); // Start loading

    try {
      // Dispatch the create order action
      const res = await dispatch(createOrder(orderPayload));

      // Check if the action was fulfilled
      if (res.type === "create_order/fulfilled") {
        // Show success notification with the message from the payload
        toast.success(
          res.payload.message || "Your order was placed successfully!"
        );

        // Navigate to the home page after a successful order
        // const navigate = useNavigate(); // Get the navigate function from react-router
        navigate("/"); // Change this to the correct route for your home page
      } else {
        // Handle other statuses or errors
        const errorMessage =
          res?.payload?.message ||
          "Something went wrong while placing your order.";
        toast.error(errorMessage);
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Order creation failed:", error);
      toast.error("Failed to place the order. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddressSelect = (index) => {
    setSelectedAddress(index);
  };

  return (
    <>
      {data?.myAddressData?.map((item, index) => (
        <div key={index} className="address">
          <div className="d-flex justify-content-end gap-4">
            {console.log(item, "item")}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleOnEdit(item._id)}
            >
              <BiSolidEdit size={20} />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(item._id)}
            >
              <RiDeleteBin6Line size={20} />
            </div>
          </div>

          <label>
            <input
              type="radio"
              name="address"
              onChange={() => handleAddressSelect(index)}
              checked={selectedAddress === index}
            />
            <p
              style={{
                textTransform: "uppercase",
                background: "#f0efef",
                fontSize: "0.75rem",
                width: "2.75rem",
                padding: "0.25rem",
                marginTop: "0.75rem",
                color: "#6B7280",
                borderRadius: "4.098px",
                height: "1.5rem",
              }}
            >
              {item?.addressAs}
            </p>
            <div className="d-flex gap-3">
            <p>{item?.name}</p>
            <h5>{item?.mobile}</h5>
            </div>
            <div  className="d-flex gap-3">
            <p>{item?.district}</p>
            <p>{item?.Landmark}</p>
            <p>{item?.state}</p>
            </div>
            
            <p>
              {item?.fullAddress} - {item?.Pincode}
            </p>
          </label>

          {selectedAddress === index && (
            <>
              <h5 className="text-danger">Cash on delivery only</h5>
              <button
                style={{
                  border: "none",
                  background: "#AB68EF",
                  borderRadius: "4px",
                  color: "#fff",
                  padding: 10,
                }}
                onClick={() => {
                  // Check if buynow or cartItems has data
                  const orderData =
                    buynow && buynow.length > 0 ? buynow : cartItems;
                  console.log(orderData, "order data from save address");

                  if (orderData) {
                    handleCreateOrderAndFetchPayment(orderData, item._id);
                  } else {
                    console.error("No items to process for order.");
                  }
                }}
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default SaveAddress;
