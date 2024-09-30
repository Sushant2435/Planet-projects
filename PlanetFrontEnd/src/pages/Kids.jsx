import { Container, Row, Col, Card } from "react-bootstrap";
import ListOfFilter from "../component/ListOfFilter";

import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Banner from "../component/Banner";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../features/product/productSlice";
import Loading from "../component/Loading";
import { useNavigate } from "react-router-dom";
const productList = [
  {
    id: 25,
    image: "/kid_prod_img/little-girl-cat-costume.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 26,
    image: "/kid_prod_img/CapturesadSV 1.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 27,
    image: "/kid_prod_img/CaptureSCXGVBSXGCV 1.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 28,
    image: "/kid_prod_img/CaptureSDADSVV 1.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 29,
    image: "/kid_prod_img/CaptureSdGF 1.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 30,
    image: "/kid_prod_img/full-length-portrait-cute-little-girl-hat.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 31,
    image: "/kid_prod_img/pexels-vika-glitter-392079-1620788.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 32,
    image: "/kid_prod_img/pexels-daniel-duarte-270529097-16951659.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 33,
    image: "/kid_prod_img/fashion-girls-standing-together-gray.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 34,
    image: "/kid_prod_img/pexels-vika-glitter-392079-1650281.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 35,
    image: "/kid_prod_img/pexels-vika-glitter-392079-1648535.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
  {
    id: 36,
    image: "/kid_prod_img/pexels-vika-glitter-392079-1620815.jpg",
    title: "POLO RALPH",
    subTitle: "Cotton Shirts",
    bPrice: "557",
    finalPrice: "399",
  },
];

const Kids = () => {
  console.log("kids components called");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const navigate = useNavigate();

  function handleAddToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      toast.error("Already exist product into cart");
    } else {
      dispatch(addToCart(product));
      toast.success("product added to cart");
    }
  }
  function handleAddToWishlist(product) {
    const existingItem = wishlist.find((item) => item.id === product.id);
    if (existingItem) {
      toast.error("Already exist product into wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("product added to wishlist");
    }
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsByCategory("Kids"));
    }
  }, [dispatch, status]);

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  return (
    <>
      <Banner
        image1={"/images/front-view-woman-with-shopping-bag-concept.jpg"}
        genre="Kid`s"
      />
      <Container fluid>
        <Row>
          <Col lg={2}>
            <ListOfFilter category="Kids" />
          </Col>
          <Col lg={10}>
            {status === "loading" && <Loading />}
            {products?.data?.length === 0 && (
              <h2 className="text-danger text-center">No Products Available</h2>
            )}
            <div className="d-flex justify-content-around flex-wrap rel">
              {products?.data?.map((productItem, index) => (
                <Card
                  key={index}
                  style={{
                    width: 250,
                    height: 450,
                    marginLeft: 10,
                    marginBottom: 30,
                  }}
                >
                  <Card.Img
                    loading="lazy"
                    className="w-100"
                    variant="top"
                    src={productItem.images[0]}
                    style={{ width: 145, height: 320, cursor: "pointer" }}
                    onClick={() => handleCardClick(productItem)}
                  />
                  <Card.Body>
                    <Card.Subtitle
                      className="mb-2 text-muted"
                      style={{ fontSize: 12 }}
                    >
                      {productItem.description}
                    </Card.Subtitle>
                    <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                      {productItem.name}
                    </Card.Title>

                    <span>
                      size: S,M,L
                      <del className="text-danger" style={{ marginLeft: 30 }}>
                        {productItem.basePrice}
                      </del>{" "}
                      RS-{productItem.finalPrice}
                    </span>
                    <div className="abs">
                      <button onClick={() => handleAddToCart(productItem)}>
                        <IoBagOutline size={18} /> ADD
                      </button>
                    </div>
                    <div className="wishabs">
                      <button
                        style={{ border: "none" }}
                        onClick={() => handleAddToWishlist(productItem)}
                      >
                        <FaRegHeart style={{ color: "red" }} size={25} />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kids;
