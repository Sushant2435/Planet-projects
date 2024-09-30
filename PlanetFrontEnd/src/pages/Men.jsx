import { Button, Col, Container, Row } from "react-bootstrap";
import ListOfFilter from "../component/ListOfFilter";
import { Card } from "react-bootstrap";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import Banner from "../component/Banner";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../features/product/productSlice";
import Loading from "../component/Loading";
import { addToCart } from "../features/cart/cartSlice";

import BannerImages1 from "/images/Banner_men1.png";
import BannerImages2 from "/images/Banner_men2.png";

const bannerImages = [
  {
    id: 1,
    image: BannerImages1,
  },
  {
    id: 2,
    image: BannerImages2,
  },
];

const Men = () => {
  // const [modalShow, setModalShow] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({}); // Changed to object

  console.log(selectedSizes, "selected size");

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  console.log(products.data, "products");
  console.log(error, "error");

  const navigate = useNavigate();

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  function handleAddToCart(product) {
    const token = localStorage.getItem("token");
    if (token) {
      // const cartData = {fabricId: product._id, quantity: quantity}
      console.log(product, "product fabricarrdksdksjdsdcasdckjdsdcsddkj");
      const defalutQuantity = 1;
      const prdId = product._id;
      console.log(prdId, "prdid");
      const selectedSize = selectedSizes[prdId];
      console.log(selectedSize, "selected size");

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
          {
            productId: product._id,
            quantity: defalutQuantity,
            size: selectedSize,
          },
        ],
      };
      dispatch(addToCart(cartData));
      toast.success(
        <div style={{ marginLeft: "20px" }}>Data Added in Cart</div>,
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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsByCategory("Male"));
    }

    // return () => dispatch(resetProducts());
  }, [dispatch, status]);


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
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

  return (
    <>
      <Banner bannerImages={bannerImages} />
      <Container className="mt-4" fluid>
        <Row>
          <Col lg={2}>
            <ListOfFilter category="Male" />
          </Col>
          <Col lg={10}>
            {status === "loading" && <Loading />}
            {products?.data?.length === 0 && (
              <h2 className="text-danger text-center">No Products Available</h2>
            )}
            <div className="d-flex justify-content-around flex-wrap rel">
              {products?.data?.map((productItem, index) => {
                // Check if the product is in the wishlist
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
                      borderRadius: 10,
                    }}
                    className="box2 mobile-card"
                  >
                    <Link to={`/products/${productItem._id}`}>
                      <Card.Img
                        loading="lazy"
                        className="w-100"
                        variant="top"
                        alt="Product Image"
                        src={productItem?.images[0]}
                        style={{
                          width: 145,
                          height: 320,
                          backgroundSize: "contain",
                          cursor: "pointer",
                          filter: productItem?.quantity === 0 && "grayscale(100%)",
                        }}
                        onClick={() => handleCardClick(productItem)}
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                        {productItem.name}
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: 12 }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: productItem.description }} />
                      </Card.Subtitle>
                      <div className="d-flex">
                        <div>Size:</div>
                        {["Shirt", "TShirt"].includes(productItem?.subCategory?.name) &&
                          productItem?.size?.map((subCateSize) => (
                            <div
                              key={`${productItem._id}-${subCateSize}`}
                              className="men-size-box d-flex justify-content-center align-items-center"
                              style={{
                                padding: "8px 5px",
                                margin: "5px",
                                borderRadius: "4px",
                                backgroundColor:
                                  selectedSizes[productItem._id] === subCateSize
                                    ? "#4CAF50"
                                    : "#f0f0f0",
                                color:
                                  selectedSizes[productItem._id] === subCateSize
                                    ? "white"
                                    : "black",
                                border:
                                  selectedSizes[productItem._id] === subCateSize
                                    ? "1px solid #4CAF50"
                                    : "1px solid #ccc",
                                cursor: "pointer",
                              }}
                              onClick={() => handleSizeClick(productItem._id, subCateSize)}
                            >
                              {subCateSize}
                            </div>
                          ))}
                      </div>

                      <p style={{ marginTop: 5 }}>
                        <span>RS. {productItem.finalPrice}</span>
                        <del
                          className="text-danger"
                          style={{ marginLeft: 10, fontSize: 14 }}
                        >
                          MRP.{productItem.basePrice}
                        </del>
                        <span
                          className="text-success"
                          style={{ marginLeft: 5, fontSize: 12 }}
                        >
                          ({productItem.discountPrice} % OFF)
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
                );
              })}

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Men;
