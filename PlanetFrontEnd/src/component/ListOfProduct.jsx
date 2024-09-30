import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../features/product/productSlice";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";

const ListOfProduct = () => {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  console.log(products, "shoes products");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductsByCategory("shoes"));
  }, [dispatch]);

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  return (
    <Container style={{ marginTop: 30 }}>
      <h1>Shoes</h1>
      {status === "loading" && <Loading />}
      <Row>
        {products?.data?.slice(0, 4).map((product, index) => {
          return (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="product" style={{ height: 450 }}>
                <Card.Img
                  variant="top"
                  className="cardimg"
                  style={{ height: 350 }}
                  src={product?.images[0]}
                  onError={(e)=>{
                        e.target.onerror = null;
                        e.target.src = "/public/images/noprod.png";
                      }}
                  onClick={() => handleCardClick(product)}
                />
                <Card.Body>
                  <Card.Title> {product?.name}</Card.Title>
                  <Card.Text>{product?.description}</Card.Text>
                  <p style={{ margin: -10, marginLeft: 1 }}>
                    <span>
                      <span>Rs. {product?.finalPrice}</span>
                      <del
                        className="text-danger"
                        style={{ marginLeft: 5, fontSize: 12 }}
                      >
                        {product?.basePrice}
                      </del>{" "}
                      <span className="text-success" style={{ fontSize: 12 }}>
                        ({product?.discountPrice} % OFF)
                      </span>
                    </span>
                  </p>
                  {/* <div className="product_icons">
                    <Button
                      style={{
                        background: "#ddd",
                        color: "black",
                        borderRadius: 30,
                        fontWeight: "bold",
                        border: "none",
                      }}
                      className="shoes-add-cart-icon"
                    >
                      <IoBagOutline size={20} /> ADD
                    </Button>
                    <FaRegHeart size={30} className="shoes-wishlist-icon" />
                  </div> */}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ListOfProduct;
