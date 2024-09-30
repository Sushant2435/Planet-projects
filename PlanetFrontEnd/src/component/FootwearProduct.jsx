import Card from "react-bootstrap/Card";
import { IoBagOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../features/product/productSlice";
import Loading from "./Loading";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { Button } from "react-bootstrap";

const FootwearProduct = () => {
  const [selectedSizes, setSelectedSizes] = useState({}); // Changed to object
  // const [isInWishlist, setIsInWishlist] = useState(false);

  const { wishlistItems } = useSelector((state) => state.wishlist);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  console.log(products, "shoes products");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  useEffect(() => {
    dispatch(fetchProductsByCategory("shoes"));
  }, [dispatch]);


  function handleAddToCart(product) {
    const token = localStorage.getItem("token");
    if (token) {
      // const cartData = {fabricId: product._id, quantity: quantity}
      console.log(product, "product fabricarrdksdksjdsdcasdckjdsdcsddkj");
      const defalutQuantity = 1;
      const prdId = product._id;
      console.log(prdId, "prdid");
      const selectedSize = selectedSizes[prdId];

      if (!selectedSize) {
        // Display a message if no size is selected
        toast.warn(
          <div style={{ marginLeft: "20px" }}>Please select a size.</div>,
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
        return; // Exit the function if no size is selected
      }

      const cartData = {
        products: [
          {
            productId: product._id,
            quantity: defalutQuantity,
            size: selectedSize,
          },
        ],
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
    } else {
      toast.error("Need to login", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  function handleAddToWishlist(product) {
    const token = localStorage.getItem("token");
    if (token) {
      // Assuming `cartItems` is an array that contains the items currently in the cart

      const WishListData = {
        Products: [{ productId: product._id }],
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

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      {status === "loading" && <Loading />}
      {products?.data?.map((productItem, index) => {
        const isInWishlist = wishlistItems?.myWhilist?.whislistItems?.some(
          (item) => item.productId._id === productItem._id
        );
        return (
          <Card
            key={index}
            style={{
              width: 250,
              height: 480,
              marginLeft: 10,
              marginBottom: 30,
            }}
            className="box2 mobile-card"
          >
            <Card.Img
              loading="lazy"
              variant="top"
              className="w-100"
              src={productItem?.images[0]}

              alt="Product Image"
              style={{
                width: 145,
                height: 320,
                backgroundSize: "cover",
                cursor: "pointer",
                filter: productItem?.quantity === 0 && "grayscale(100%)",
              }}

              onClick={() => handleCardClick(productItem)}
            />
            <Card.Body>
              <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                {productItem?.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: 12 }}>
                {productItem?.description}
              </Card.Subtitle>
              <div className="d-flex">
                {productItem?.footSize.map((fsize) => (
                  <div
                    key={`${productItem._id}-${fsize}`} // Make sure key is unique
                    className="men-size-box d-flex justify-content-center align-items-center"
                    style={{
                      padding: "8px 5px",
                      margin: "5px",
                      borderRadius: "4px",
                      backgroundColor:
                        selectedSizes[productItem._id] === fsize
                          ? "#4CAF50"
                          : "#f0f0f0",
                      color:
                        selectedSizes[productItem._id] === fsize
                          ? "white"
                          : "black",
                      border:
                        selectedSizes[productItem._id] === fsize
                          ? "1px solid #4CAF50"
                          : "1px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSizeClick(productItem._id, fsize)}
                  >
                    {fsize}
                  </div>
                ))}
              </div>
              {/* <span style={{ cursor: "pointer" }}>
              <span>size: S,M,L </span>
            </span> */}
              <p>
                RS. {productItem?.finalPrice}
                <del
                  className="text-danger"
                  style={{ marginLeft: 5, fontSize: 14 }}
                >
                  MRP.{productItem?.basePrice}
                </del>
                <span
                  style={{ fontSize: 14, marginLeft: 5 }}
                  className="text-success"
                >
                  ({productItem?.discountPrice}%OFF)
                </span>
              </p>
              <div className="abs">
                {productItem.quantity === 0 ? (
                  <p
                    className="text-danger"
                    style={{
                      marginLeft: -100,
                      background: "white",
                      marginTop: 10,
                      padding: 10,
                    }}
                  >
                    OUT OF STOCK
                  </p>
                ) : (
                  <Button
                    className="list-group-item list-group-item-action  align-items-center mt-3 border rounded-pill"
                    onClick={() => handleAddToCart(productItem)}
                  >
                    <IoBagOutline size={18} /> ADD
                  </Button>
                )}
                {/* <Button
                className="list-group-item list-group-item-action  align-items-center mt-3 border rounded-pill"
                onClick={() => handleAddToCart(productItem)}
              >
                <IoBagOutline size={18} /> ADD
              </Button> */}
              </div>
              <div className="wishabs">
                <button
                  style={{ border: "none" }}
                  onClick={() => handleAddToWishlist(productItem)}
                >
                  {isInWishlist ? (
                    <FaHeart color="red" size={25} />
                  ) : (
                    <FaRegHeart color="#f0efef" size={25} />
                  )}
                </button>

              </div>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
};

export default FootwearProduct;
