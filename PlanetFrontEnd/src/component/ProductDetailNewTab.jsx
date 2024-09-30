import { useParams } from "react-router-dom";
import SimilarProducts from "./SimilarProducts"; // This will now fetch data from API
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { IoBagOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { fetchProductById, getSimilarProducts } from "../features/product/productSlice"; // Import API calls

const ProductDetailNewTab = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Selectors to access product and similar products
  const product = useSelector((state) => state.products.currentProduct);
  const similarProductsStatus = useSelector((state) => state.products.similarProductsStatus);
  const similarProductsError = useSelector((state) => state.products.similarProductsError);

  // Fetch product by ID and similar products
  useEffect(() => {
    dispatch(fetchProductById(id)); // Fetch the current product
    dispatch(getSimilarProducts(id)); // Fetch similar products
  }, [dispatch, id]);

  const token = localStorage.getItem("token");

  function handleAddToCart(product) {
    if (token) {
      const cartData = {
        products: [{ productId: product?._id, quantity: quantity }],
      };
      dispatch(addToCart(cartData));
      toast.success("Data Added in Cart", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error("Need to login", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  function handleAddToWishlist(product) {
    if (token) {
      const wishListData = {
        Products: [{ productId: product._id }],
      };
      dispatch(addToWishlist(wishListData));
      toast.success("Product added to wishlist", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error("You need to log in", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formattedFinalPrice = product ? formatPrice(product.finalPrice) : "";
  const formattedBasePrice = product ? formatPrice(product.bPrice) : "";

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (similarProductsStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (similarProductsStatus === "failed") {
    return <div>Error: {similarProductsError}</div>;
  }

  return (
    <>
      <Container style={{ marginTop: 20 }}>
        <Row>
          <Col>
            {product ? (
              <Card style={{ width: 350, height: 523 }}>
                <div className="sinmenprdabs">
                  <Card.Img
                    variant="top"
                    style={{ width: 350, height: 400 }}
                    src={product.image}
                  />
                  <div className="sinmenprdrel">
                    <FaRegHeart
                      onClick={() => handleAddToWishlist(product)}
                      style={{ color: "red" }}
                      size={30}
                    />
                  </div>
                </div>

                <div className="menprdImg" style={{ marginTop: 20 }}>
                  <Card.Img variant="top" style={{ width: 80 }} height={100} src={product.image} />
                  <Card.Img variant="top" style={{ width: 80 }} height={100} src={product.image} />
                  <Card.Img variant="top" style={{ width: 80 }} height={100} src={product.image} />
                  <Card.Img variant="top" style={{ width: 80 }} height={100} src={product.image} />
                </div>
              </Card>
            ) : (
              <div>Product not found</div>
            )}
            {/* Ratings and Customer Feedback */}
            <div className="ratinng">
              <h3 style={{ marginTop: 20 }}>RATINGS</h3>
              <div style={{ marginTop: 20, marginLeft: 5 }}>
                <FaRegStar size={25} />
              </div>
            </div>
            {/* Customer reviews and feedback sections would remain unchanged */}
          </Col>
          <Col>
            <Card style={{ width: 500, border: "none" }}>
              <Card.Body>
                <Card.Title>{product?.brand || "Brand Name"}</Card.Title>
                <Card.Subtitle>{product?.title || "Product Title"}</Card.Subtitle>
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
                  <del className="text-danger">{formattedBasePrice}</del>{" "}
                  <span className="text-success" style={{ fontWeight: "bold" }}>
                    (84% off)
                  </span>
                </Card.Text>
                <Card.Title className="text-success">
                  INCLUSIVE OF ALL TAXES
                </Card.Title>
                {/* Size and Color Selection */}
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
                <span style={{ marginRight: 15, fontSize: 20 }}>{quantity}</span>
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
                <Stack
                  direction="horizontal"
                  gap={3}
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
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
                  <Button
                    style={{
                      width: 150,
                      padding: 10,
                      border: "none",
                      background: "#AB68EF",
                    }}
                  >
                    Buy Now
                  </Button>
                </Stack>
                {/* Additional product information */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <SimilarProducts productId={id} />
      </Container>
    </>
  );
};

export default ProductDetailNewTab;
