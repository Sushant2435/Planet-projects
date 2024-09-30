import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { IoBagOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import {
  fetchCartItems,
  incrementDecrementItemQuantity,
  removeAllCart,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import Loading from "../component/Loading";
import { NavLink, useNavigate } from "react-router-dom";
import { clearBuynow } from "../features/BuyNow/buyNowSlice";

const Cart = () => {
  const [pincode,setPincode]=useState("")
  const { cartItems, status } = useSelector((state) => state.cart);
  // const test = useSelector((state) => state.cart);
  console.log(cartItems, "test");
  const navigate = useNavigate();
  const disPatch = useDispatch();
  console.log(cartItems, "cart item cart Data");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      disPatch(fetchCartItems());
    }
  }, [disPatch, token]);

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }


  const handleOnchange = (e) => {
    // const phoneNumber = parsePhoneNumberFromString(phone);
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    const limitedValue = numericValue.slice(0, 6);
    setPincode(limitedValue);
   
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (!pincodeRegex.test(pincode)) {
      toast.warn("Invalid pincode format. Must be 6 digits.", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    // Add pincode-related logic here
  };

  // const handleRemoveCart = (id) => {
  //   const productId = id;
  //   console.log(productId, 'product id from cart')
  //   console.log(id, 'id from cart page compo')
  //   disPatch(removeFromCart({productId: productId}));
  // };

  // useEffect(() => {
  //   if (status === "succeeded") {
  //     disPatch(fetchCartItems());
  //   }
  // }, [status, disPatch, error]);
  // console.log(cart,"from cart")
  // const total = cart.reduce((accu, curr) => accu + Number(curr.finalPrice), 0);
  // const percentage = cart.reduce(
  //   (accu, curr) => accu + Number(curr.finalPrice) * 0.58,
  //   0
  // );
  // const coupon = 75;
  // const totalAmount = total - percentage - coupon;
  // const save = percentage + coupon;
  // const dispatch = useDispatch();

  // function handleRemoveToCart(id) {
  //   dispatch(handleRemoveToCart(id));
  //   toast.success("product delete from a cart");
  // }
  // function handleClearCart() {
  //   if (window.confirm("Are you sure you want to clear the cart?")) {
  //     dispatch(clearCart());
  //     toast.success("All Product delete from a cart");
  //   }
  // }

  // console.log(test, "test2part");

  function handleRemoveFromCart({ productId }) {
    disPatch(removeFromCart({ productId }));
    toast.success(
      <div style={{ marginLeft: "20px" }}>Product deleted successfully</div>,
      {
        icon: (
          <img
            src={tostSuccess}
            style={{ width: "30px", height: "30px" }}
            alt="logo"
          />
        ),
        position: "top-center",
        autoClose: 2000,
      }
    );
  }

  // function removeAllCart(id) {
  //   disPatch(removeAllCart(id));
  //   toast.success("All Product deleted successfully", {
  //     position: "top-center",
  //     autoClose: 2000,
  //   });
  // }

  const handleIncrement = ({ productId, action }) => {
    disPatch(incrementDecrementItemQuantity({ productId, action }));
  };

  const handleDecrement = ({ productId, quantity }) => {
    if (quantity > 1) {
      disPatch(
        incrementDecrementItemQuantity({
          productId,
          action: "decrement",
        })
      );
    }
  };
  return (
    <>
      {status === "loading" && <Loading />}
      <div className="d-flex bag" style={{ marginLeft: 600, marginTop: 90 }}>
        <span>
          <IoBagOutline size={30} color="#AB68EF" />
        </span>
        <h5
          style={{
            fontSize: 29,
            fontWeight: "bold",
            marginLeft: 15,
            top: 10,
            color: "#AB68EF",
          }}
        >
          MY BAG
        </h5>
      </div>
      <Container style={{ marginBottom: 30 }}>
        <Row>
          <Col style={{ marginBottom: 30 }}>
            {/* <h3 style={{ marginBottom: 30 }}>
              MY Cart{" "}
              <span style={{ fontSize: 16 }}>
                {cartItems?.cart?.cartItems?.length} Items
              </span>
            </h3> */}
            {cartItems?.cart?.cartItems?.length > 0 && (
              <div className="cart" style={{ marginTop: 62 }}>
                {/* <div className="wbox"></div> */}
                <h6 style={{ marginTop: 6 }}>
                  {cartItems?.cart?.cartItems?.length}/
                  {cartItems?.cart?.cartItems?.length} items selected
                </h6>
                <Button
                  style={{
                    background: "#FFFFFF",
                    color: "black",
                    fontWeight: "bold",
                    marginLeft: 100,
                    border: "none",
                  }}
                  // onClick={() => handleClearCart()}
                  onClick={() => {
                    disPatch(removeAllCart(cartItems.cart._id));
                    toast.success(" All product deleted successfully", {
                      position: "top-center",
                      autoClose: 2000,
                    });
                  }}
                >
                  Remove
                </Button>
                <Button
                  style={{
                    background: "#FFFFFF",
                    color: "black",
                    fontWeight: "bold",
                    marginLeft: 20,
                    border: "none",
                  }}
                >
                  Move to WishList
                </Button>
              </div>
            )}

            <div className="cartItem">
              {cartItems?.cart?.cartItems?.length === 0 ||
              cartItems?.length === 0 ||
              cartItems.cart === null ? (
                <>
                  <h3 className="text-secondary text-center">
                    Your Cart Is Currently Empty
                  </h3>
                  <img
                    src="/images/pngwing.com (100).png"
                    loading="lazy"
                    width={250}
                    height={250}
                    style={{ marginLeft: 480 }}
                  />
                </>
              ) : (
                cartItems.cart?.cartItems?.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex test"
                    style={{
                      marginBottom: 20,
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <img
                      style={{
                        marginLeft: 30,
                        marginTop: 20,
                        height: 120,
                        width: 100,
                        cursor: "pointer",
                      }}
                      loading="lazy"
                      src={item?.productId.images[0]}
                      alt="cart Image"
                      onClick={() => handleCardClick(item?.productId)}
                     
                    />

                    <div
                      className="cartabs"
                      onClick={() =>
                        handleRemoveFromCart({ productId: item.productId._id })
                      }
                    >
                      <RxCross2 size={30} />
                    </div>
                    <div className="cartDetails">
                      <h5 style={{ marginTop: 20, fontSize: 14 }}>
                        {item.productId.name}
                      </h5>
                      <p>size: {item?.size}</p>
                      <div className="cartPriceDetails">
                        <span
                          style={{
                            color: "#00FF29",
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                        >
                          ₹{item?.productId?.finalPrice}
                        </span>
                        <span
                          style={{
                            marginLeft: 30,
                            color: "#888888",
                            fontSize: 16,
                          }}
                        >
                          {" "}
                          MRP {item.productId.basePrice}
                        </span>
                        <span
                          style={{
                            marginLeft: 20,
                            color: "#FF9548",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          ({item?.productId?.discountPrice}% OFF)
                        </span>
                      </div>
                      <div className="qtysize">
                        <label
                          style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            marginRight: 15,
                          }}
                        >
                          QTY:
                        </label>
                        <Button
                          style={{
                            padding: 5,
                            background: "#AB68EF",
                            marginRight: 20,
                            border: "none",
                          }}
                          onClick={() =>
                            handleDecrement({
                              productId: item?.productId?._id,
                              quantity: item?.quantity,
                            })
                          }
                        >
                          <TiMinus />
                        </Button>
                        <span style={{ marginRight: 15, fontSize: 20 }}>
                          {item.quantity}
                        </span>
                        <Button
                          style={{
                            padding: 5,
                            background: "#AB68EF",
                            marginRight: 20,
                            border: "none",
                          }}
                          onClick={() =>
                            handleIncrement({
                              productId: item?.productId?._id,
                              action: "increment",
                            })
                          }
                        >
                          <TiPlus />
                        </Button>
                      </div>
                      <div className="d-flex" style={{ marginTop: 30 }}>
                        <p
                          style={{
                            fontSize: 16,
                            marginLeft: -70,
                            marginTop: 30,
                          }}
                        >
                          <span style={{ fontWeight: "bold" }}>14 Days</span>{" "}
                          Return Available
                        </p>
                        <p
                          style={{
                            fontSize: 16,
                            marginTop: 30,
                            marginLeft: 30,
                          }}
                        >
                          Delivery BY{" "}
                          <span style={{ fontWeight: "bold" }}>
                            1 June 2024
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Col>
          {cartItems?.cart?.cartItems?.length > 0 && (
            <Col>
              <Form
                className="d-flex"
                style={{
                  boxShadow: "2px 2px 2px #888888",
                  marginTop: 54,
                  height: 44,
                }}
              >
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label
                    column
                    sm="2"
                    style={{
                      fontWeight: "bold",
                      width: 110,
                    }}
                  >
                    Deliver To:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      className="w-75"
                      type="number"
                      value={pincode}
                      onChange={handleOnchange}
                      placeholder="Pin Code"
                      style={{ marginLeft: 120, marginTop: -36, width: 300 }}
                    />
                  </Col>
                </Form.Group>
                <Button
                  variant="success"
                  style={{ width: 120, height: 40, marginRight: 40 }}
                  onSubmit={handleSubmit}
                >
                  CHECK
                </Button>
              </Form>

              <div className="price-details">
                <h5>
                  PRICE DETAILS ({cartItems?.cart?.cartItems?.length} items)
                </h5>
                <div className="price-item">
                  <span>
                    Price ({cartItems?.cart?.cartItems?.length} items)
                  </span>

                  <span>₹{cartItems?.orderSummary?.total}</span>
                </div>

                <div className="price-item">
                  <span>Discount</span>

                  <span style={{ color: "#00FF29" }}>
                    − ₹{cartItems?.orderSummary?.discount}
                  </span>
                </div>

                <div className="price-item">
                  <span>Sub Total</span>

                  <span style={{ color: "#00FF29" }}>
                    ₹{cartItems?.orderSummary?.subtotal}
                  </span>
                </div>
                {/* <div className="price-item">
                <span>Coupons for you</span>
                <span style={{ color: "#00FF29" }}>− ₹{"0"}</span>
              </div> */}
                <div className="price-item">
                  <span>Delivery Charges</span>
                  <span>
                    <span style={{ color: "#00FF29" }}>
                      ₹{cartItems?.orderSummary?.deliveryCharges}
                    </span>
                  </span>
                </div>
                <hr />
                <div className="total-amount">
                  <span>Total Amount</span>
                  <span>₹{cartItems?.orderSummary?.totalPrice}</span>
                </div>
                <div className="savings">
                  <span>You will save</span>
                  <span>
                    ₹{cartItems?.orderSummary?.discount} on this order
                  </span>
                </div>
                <NavLink to="/address">
                  <Button
                    className="w-100"
                    style={{ background: "#AB68EF", border: "none" }}
                    onClick={() => disPatch(clearBuynow())}
                  >
                    PLACE ORDER
                  </Button>
                </NavLink>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
