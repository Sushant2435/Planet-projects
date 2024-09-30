import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
// import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { IoBagOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import SimilarProducts from "./SimilarProducts";
// import { addToCart } from "../features/cart/cartSlice";
import { fetchProductById } from "../features/product/productSlice";
import Loading from "./Loading";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import ReactImageMagnify from "react-image-magnify";

import {
  buyNow,
  clearBuynow,
  // clearLocalStorage,
} from "../features/BuyNow/buyNowSlice";
// import { FaHeart } from "react-icons/fa";

const MenProductDetails = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.products.singleProduct);
  const status = useSelector((state) => state.products.singleProductStatus);
  const error = useSelector((state) => state.products.singleProductError);
  const [selectedSize, setSelectedSize] = useState(null);
  console.log(selectedSize, "selected size");
  console.log(product, "product");

  const { category, subCategory, size, numSize, footSize } = product?.record || {};

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const token = localStorage.getItem("token");

  const handleAddToCart = (product) => {
    if (token) {
      const existingItem = product?.data?.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        toast.error("Already exists in the cart");
      } else {
        if (!selectedSize) {
          toast.warn(
            <div style={{ marginLeft: "20px" }}>Please select a size</div>,
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
          return;
        }
        const cartData = {
          products: [
            { productId: product.record?._id, quantity, size: selectedSize },
          ],
          // selectedSize, // Include the selected size in the cart data
        };

        dispatch(addToCart(cartData));
        toast.success(
          <div style={{ marginLeft: "20px" }}>Product added to cart</div>,
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
    } else {
      toast.error("You need to log in", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearBuynow());
    };
  }, [dispatch]);

  useEffect(() => {
    // Clear the store if the user navigates back to the product details page
    if (location.pathname === "/products") {
      dispatch(clearBuynow());
      // clearLocalStorage();
    }
  }, [location, dispatch]);

  function handleAddToWishlist(product) {
    if (token) {
      // Assuming `cartItems` is an array that contains the items currently in the cart

      const WishListData = {
        Products: [{ productId: product?.record?._id }],
      };

      dispatch(addToWishlist(WishListData));
      toast.success(
        <div style={{ marginLeft: "20px" }}>Product added to wishlist</div>,
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
    } else {
      toast.error("You need to log in", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formattedFinalPrice = formatPrice(product?.record?.finalPrice);
  const formattedBasePrice = formatPrice(product?.record?.basePrice);

  const renderSizes = () => {
    let sizesToRender = [];

    if (subCategory?.name === "Jeans") {
      sizesToRender = numSize || [];
    } else if (["Shirt", "TShirt", "suits"].includes(subCategory?.name)) {
      sizesToRender = size || [];
    } else if (category?.name === "shoes") {
      sizesToRender = footSize || [];
    }

    return sizesToRender.map((size, index) => (
      <div
        key={index}
        className="size-box d-flex justify-content-center align-items-center"
        style={{
          padding: "10px 20px",
          margin: "5px",
          borderRadius: "4px",
          backgroundColor: selectedSize === size ? "#EFA2C8" : "#f0f0f0",
          color: selectedSize === size ? "white" : "black",
          border:
            selectedSize === size ? "2px solid #EFA2C8" : "1px solid #ccc",
          cursor: "pointer",
        }}
        onClick={() => handleSizeClick(size)}
      >
        {size}
      </div>
    ));
  };

  if (status === "loading") {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function imageToggle(idx) {
    setIndex(idx);
  }
  // const handleBuyNow = () => {
  //   navigate("/address", { state: { productData: product } });
  // };

  const handleBuyNow = (product) => {
    if (token) {
      if (!selectedSize) {
        toast.warn(
          <div style={{ marginLeft: "20px" }}>Please select a size</div>,
          {
            icon: (
              <img
                src="public/Group.svg"
                style={{ width: "30px", height: "30px" }}
                alt="logo"
              />
            ),
            position: "top-center",
            autoClose: 2000,
          }
        );
        return;
      }

      if (product?.record?.quantity === 0) {
        toast.warn(<div style={{ marginLeft: "20px" }}>Out Of Stock</div>, {
          icon: (
            <img
              src="/public/Group.svg"
              style={{ width: "30px", height: "30px" }}
              alt="logo"
            />
          ),
          position: "top-center",
          autoClose: 2000,
        });
        return;
      }
      const item = {
        productId: product.record._id,
        selectedSize: selectedSize,
        quantity: quantity,
      };
      dispatch(buyNow(item));
      navigate("/address");
    } else {
      toast.warning(<div style={{ marginLeft: "20px" }}>Need To Login</div>, {
        icon: (
          <img
            src="/public/Group.svg"
            style={{ width: "30px", height: "30px" }}
            alt="logo"
          />
        ),
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const style = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial",
    lineHeight: 1.3,
    fontSize: "16px",
    position: "absolute",
    zIndex: 1,
    filter: product?.record?.quantity === 0 && "grayscale(100%)",
  };

  return (
    <Container style={{ marginTop: 90 }}>
      {status === "loading" && <Loading />}
      {product && (
        <>
          <Row>
            <Col>
              {/* <FaHeart size={30} style={{ color: "red" }} /> */}

              <Card style={{ width: 350, height: 452 }}>
                <div className="sinmenprdabs">
                  {/* <Card.Img
                    variant="top"
                    style={{
                      width: 348,
                      height: 450,
                      borderRadius: "6px",
                      filter:
                        product?.record?.quantity === 0 && "grayscale(100%)",
                    }}
                    src={product?.record?.images[index]}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/public/images/noprod.png";
                    }}
                  /> */}

                  <div style={style}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Product Image",
                          isFluidWidth: true,
                          src: product?.record?.images[index],
                        },
                        largeImage: {
                          src: product?.record?.images[index],
                          width: 1200, // Width of large image
                          height: 1400, // Height of large image
                        },
                        enlargedImageContainerStyle: {
                          borderRadius: "10px",
                        },
                        enlargedImageContainerDimensions: {
                          width: "250%",
                          height: "100%",
                        },
                      }}
                      // fadeDurationInMs={700}
                      hoverDelayInMs={300}
                      isActivatedOnTouch={true}
                    />
                  </div>

                  <div className="sinmenprdrel">
                    <FaRegHeart
                      onClick={() => handleAddToWishlist(product)}
                      style={{ color: "red" }}
                      size={30}
                    />
                  </div>
                </div>
              </Card>
              <Card style={{ width: 350, marginTop: 6 }}>
                <div className="menprdImg">
                  {product?.record?.images.map((img, idx) => (
                    <React.Fragment key={idx}>
                      <Card.Img
                        variant="top"
                        style={{
                          width: 80,
                          cursor: "pointer",
                          filter:
                            product?.record?.quantity === 0 &&
                            "grayscale(100%)",
                        }}
                        height={100}
                        src={img}
                        onClick={() => imageToggle(idx)}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/public/images/noprod.png";
                        }}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </Card>
              {product?.record?.quantity === 0 && (
                <strong className="text-danger" style={{ marginLeft: 100 }}>
                  currently out of stock
                </strong>
              )}

              <div className="ratinng">
                <h3 style={{ marginTop: 20 }}>RATINGS</h3>
                <div style={{ marginTop: 20, marginLeft: 5 }}>
                  <FaRegStar size={25} />
                </div>
              </div>
              <div className="rowarating">
                <div className="coloumn-1">
                  <p style={{ fontSize: 60 }}>4.3 </p>
                  <p style={{ marginTop: -75, marginLeft: 90 }}>
                    <FaRegStar size={30} color="blue" />
                  </p>
                  <p>30 Verified Buyers</p>
                </div>

                <div className="column-2">
                  <div>
                    <label>
                      5 <FaRegStar />
                    </label>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="11"
                    />
                    <label>19</label>
                  </div>

                  <div>
                    <label>
                      4 <FaRegStar />
                    </label>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="11"
                    />
                    <label>15</label>
                  </div>

                  <div>
                    <label>
                      3 <FaRegStar />
                    </label>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="11"
                    />
                    <label>5</label>
                  </div>

                  <div>
                    <label>
                      2 <FaRegStar />
                    </label>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="11"
                    />
                    <label>1</label>
                  </div>

                  <div>
                    <label>
                      1 <FaRegStar />
                    </label>
                    <input
                      type="range"
                      id="volume"
                      name="volume"
                      min="0"
                      max="11"
                      color="red"
                    />
                    <label>11</label>
                  </div>
                </div>
              </div>
              <h3 style={{ fontSize: 20, marginTop: 30 }}>
                WHAT CUSTOMER SAID
              </h3>
              <div style={{ marginTop: 15 }}>
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="11"
                />
                <label>A Little Tight (50%)</label>
              </div>
              <div style={{ marginTop: 10 }}>
                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min="0"
                  max="100"
                  value="90"
                  step="10"
                />
                <label>Just Right (100%)</label>
              </div>
            </Col>
            <Col>
              <Card style={{ width: 500, border: "none" }}>
                <Card.Body>
                  <Card.Title>{product?.record?.name}</Card.Title>
                  <Card.Subtitle style={{ fontSize: 14 }}>
                    {product?.record?.description}
                  </Card.Subtitle>
                  <p
                    style={{
                      width: 250,
                      border: "1px solid black",
                      marginTop: 20,
                    }}
                  ></p>

                  <Card.Text>
                    <span style={{ fontSize: 22, fontWeight: 600 }}>
                      {formattedFinalPrice}
                    </span>{" "}
                    MRP <del className="text-danger">{formattedBasePrice}</del>{" "}
                    <span
                      className="text-success"
                      style={{ fontWeight: "bold" }}
                    >
                      {product?.record?.discountPrice}% off
                    </span>
                  </Card.Text>
                  <Card.Title className="text-success" style={{ fontSize: 14 }}>
                    INCLUSIVE OF ALL TAXES
                  </Card.Title>

                  <Card.Title style={{ fontSize: 17 }}>SELECT SIZE</Card.Title>
                  <div
                    className="size-options"
                    style={{ cursor: "pointer", marginBottom: 10 }}
                  >
                    {renderSizes()}
                  </div>
                  <div>
                    <Button
                      style={{
                        background: "#AB68EF",
                        marginRight: 20,
                        border: "none",
                      }}
                      onClick={decrementQuantity}
                    >
                      <TiMinus />
                    </Button>
                    <span style={{ marginRight: 15, fontSize: 20 }}>
                      {quantity}
                    </span>
                    <Button
                      style={{
                        background: "#AB68EF",
                        marginRight: 20,
                        border: "none",
                      }}
                      onClick={incrementQuantity}
                    >
                      <TiPlus />
                    </Button>
                  </div>

                  <Stack
                    direction="horizontal"
                    gap={3}
                    style={{ marginTop: 20, marginBottom: 20 }}
                  >
                    {product?.record?.quantity === 0 ? null : (
                      <Button
                        style={{
                          background: "#AB68EF",
                          border: "none",
                          padding: 7,
                        }}
                        onClick={() => handleAddToCart(product)}
                      >
                        <IoBagOutline
                          style={{ marginLeft: 10 }}
                          size={30}
                          color="white"
                        />
                        <span style={{ marginLeft: 10 }}>Add To Bag</span>
                      </Button>
                    )}
                    <Button
                      style={{
                        width: 150,
                        padding: 10,
                        border:
                          product.record.quantity === 0 ? "1px solid" : "none",
                        background:
                          product.record.quantity === 0 ? "white" : "#AB68EF",
                        color: product.record.quantity === 0 && "red",
                      }}
                      onClick={() => handleBuyNow(product)}
                    >
                      {product?.record?.quantity === 0
                        ? "Out Of Stock"
                        : "Buy Now"}
                    </Button>
                  </Stack>
                  <Card.Text>
                    100% Original Products <br /> Pay on delivery might be
                    available <br /> Easy 14 days returns and exchanges
                  </Card.Text>
                  <Card.Subtitle style={{ marginTop: 10, marginBottom: 10 }}>
                    BEST OFFERS
                  </Card.Subtitle>
                  <Card.Img
                    variant="top"
                    style={{ width: 200 }}
                    height={100}
                    src="/images/Group 1000001773.jpg"
                  />
                  <Card.Text>
                    <Card.Subtitle style={{ marginTop: 10, marginBottom: 10 }}>
                      PRODUCT DETAILS
                    </Card.Subtitle>
                    Green solid opaque Casual shirt ,has a spread collar, button
                    placket, <br />1 pocket, long regular sleeves, curved hem
                  </Card.Text>
                  <Card.Subtitle style={{ marginBottom: 10 }}>
                    Size & Fit
                  </Card.Subtitle>
                  <Card.Text>
                    Fit: Slim FitThe <br />
                    model (height 6') is wearing a size 40
                  </Card.Text>
                  <Card.Subtitle style={{ marginBottom: 10 }}>
                    Material Care
                  </Card.Subtitle>
                  <Card.Text>
                    85% Cotton , 15% Lyocell <br />
                    Machine Wash
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <SimilarProducts productId={id} />
        </>
      )}
    </Container>
  );
};

export default MenProductDetails;
