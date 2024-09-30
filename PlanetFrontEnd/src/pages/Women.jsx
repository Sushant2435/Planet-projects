import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ListOfFilter from "../component/ListOfFilter";
import { IoBagOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Banner from "../component/Banner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../features/product/productSlice";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";
import BannerImages1 from "/images/Banner_women1.png";
import BannerImages2 from "/images/Banner_women2.png";
import BannerImages3 from "/images/Banner_women3.png";
import parse from "html-react-parser";
const bannerImages = [
  {
    id: 1,
    image: BannerImages1,
  },
  {
    id: 2,
    image: BannerImages2,
  },
  {
    id: 3,
    image: BannerImages3,
  },
];
const Women = () => {
  console.log("women component called");
  const [selectedSizes, setSelectedSizes] = useState({}); // Changed to object

  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  // const error = useSelector((state) => state.products.error);
  const navigate = useNavigate();

  console.log("wishlistItems kjdhfkjsdhmk fhds k vsd fsduigf wewgfsu", wishlistItems)
  console.log(products, "products from women test");

  // function handleAddToCart(product) {
  //   const existingItem = cart.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     toast.error("Already added to cart");
  //   } else {
  //     dispatch(addToCart(product));
  //     toast.success("product added to a cart");
  //   }
  // }

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsByCategory("Female"));
    }
  }, [dispatch, status]);
  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  function handleAddToCart(product) {
    const token = localStorage.getItem("token");

    if (token) {
      const defaultQuantity = 1;
      const prdId = product._id;
      console.log(prdId, "prdid");
      const selectedSize = selectedSizes[prdId];

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
            quantity: defaultQuantity,
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
              src="/Group.svg" // Corrected path
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Banner bannerImages={bannerImages} />
      <Container className="mt-4" fluid>
        <Row>
          <Col lg={2}>
            <ListOfFilter category="Female" />
          </Col>
          <Col lg={10}>
            {status === "loading" && <Loading />}
            {products?.data?.length === 0 && (
              <h2 className="text-danger text-center">No Products Available</h2>
            )}
            <div className="d-flex justify-content-around flex-wrap rel">
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
                      className="w-100"
                      variant="top"
                      src={productItem?.images[0]}
                      alt="Product Image"
                      style={{
                        height: 320,
                        backgroundSize: "cover",
                        filter: productItem?.quantity === 0 && "grayscale(100%)",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCardClick(productItem)}
                    />
                    <Card.Body>
                      <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                        {productItem.name}
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontSize: 12 }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: productItem.description,
                          }}
                        />
                        {/* {parse(productItem.description)} */}
                      </Card.Subtitle>

                      <div className="d-flex">
                        <div>Size:</div>
                        {["Shirt", "TShirt", "suits"].includes(
                          productItem?.subCategory?.name
                        ) &&
                          productItem?.size?.map((subCateSize) => (
                            <div
                              key={`${productItem._id}-${subCateSize}`} // Make sure key is unique
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
                              onClick={() =>
                                handleSizeClick(productItem._id, subCateSize)
                              }
                            >
                              {subCateSize}
                            </div>
                          ))}

                        <div
                          className="d-flex"
                        // style={{position:"absolute",right:140,bottom:35}}
                        >
                          {productItem?.subCategory?.name === "Jeans" &&
                            productItem.numSize.map((subCateSize) => (
                              <div
                                key={`${productItem._id}-${subCateSize}`} // Make sure key is unique
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
                                onClick={() =>
                                  handleSizeClick(productItem._id, subCateSize)
                                }
                              >
                                {subCateSize}
                              </div>
                            ))}
                        </div>
                      </div>

                      <p>
                        <span>RS. {productItem.finalPrice}</span>
                        <del
                          className="text-danger"
                          style={{ marginLeft: 10, fontSize: 13 }}
                        >
                          MRP. {productItem.basePrice}
                        </del>{" "}
                        <span className="text-success" style={{ fontSize: 13 }}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Women;
