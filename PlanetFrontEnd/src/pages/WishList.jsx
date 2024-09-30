import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { IoBagOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Stack from "react-bootstrap/Stack";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import {removeAllWishlist,removeFromWishlist} from "../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WishList = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  console.log(wishlistItems.message, "wishlist items");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

 

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  
  function handleRemoveFromWishlist({ productId }) {
    dispatch(removeFromWishlist({ productId }));

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

  function handleAddToCart(product) {
    if (token) {
      const existingItem = product?.data?.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        toast.error("Already exists in the cart");
      } else {
        const defaultQuantity = 1;
        const cartData = {
          products: [
            { productId: product.productId._id, quantity: defaultQuantity },
          ],
        };

        dispatch(addToCart(cartData));
        toast.success("Product added to cart", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } else {
      toast.error("You need to log in", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  }

  return (
    <Container style={{ marginTop: 80 }}>
      <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
        <FaHeart size={35} color="#AB68EF" />
        <h3
          style={{
            fontSize: 29,
            fontWeight: "bold",
            marginLeft: 15,
            top: 10,
            color: "#AB68EF",
          }}
        >
          MY WISHLIST
        </h3>
      </div>

      {wishlistItems?.myWhilist?.whislistItems.length > 0 && (
        <div style={{ marginTop: 10 }} className="wishlist">
          <h6 style={{ marginTop: 6 }}>
            {wishlistItems?.myWhilist?.whislistItems.length}/
            {wishlistItems?.myWhilist?.whislistItems.length} items selected
          </h6>
          <Button
            style={{
              background: "#FFFFFF",
              color: "black",
              fontWeight: "bold",
              marginLeft: "auto",
              border: "none",
            }}
            onClick={() => {
              dispatch(removeAllWishlist(wishlistItems.myWhilist._id));
              toast.success("All products deleted successfully", {
                position: "top-center",
                autoClose: 2000,
              });
            }}
          >
            Remove from Wishlist
          </Button>
        </div>
      )}

      <Row className="mt-3">
        {wishlistItems?.myWhilist?.whislistItems.length === 0 ||
        wishlistItems?.length === 0 ||
        wishlistItems.message === "Request failed with status code 400" ? (
          <Col className="text-center">
            <h3 className="text-secondary text-center">
              Your Wishlist is Currently Empty
            </h3>
            <img
              src="/images/pngwing.com (100).png"
              loading="lazy"
              width={200}
              height={200}
              // className="mx-auto"
            />
          </Col>
        ) : (
          wishlistItems?.myWhilist?.whislistItems?.map((productItem, index) => (
            <Col
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              key={index}
              className="mb-4"
            >
              <Card className="h-100">
                <Card.Img
                  loading="lazy"
                  className="w-100"
                  variant="top"
                  src={productItem?.productId?.images[0]}

                 alt="Product Image"
                      style={{
                        width: 145,
                        height: 320,
                        backgroundSize: "contain",
                        cursor:"pointer"
                      }}

                  onClick={() => handleCardClick(productItem?.productId)}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                    {productItem.productId.name}
                  </Card.Title>
                  <span>
                    RS. {productItem.productId.finalPrice}
                    <span style={{ marginLeft: 20 }}>
                      <del
                        className="text-danger"
                        style={{ marginLeft: 5, fontSize: 14 }}
                      >
                        MRP.{productItem.productId.basePrice}
                      </del>
                      <span className="text-success" style={{ fontSize: 14 }}>
                        ({productItem?.productId?.discountPrice})% OFF
                      </span>
                    </span>
                  </span>
                  <Stack
                    direction="horizontal"
                    gap={3}
                    className="mt-2"
                    // style={{ marginTop: 20, border: "2px solid red" }}
                  >
                    <Button
                      style={{ background: "#AB68EF", border: "none" }}
                      onClick={() => handleAddToCart(productItem)}
                    >
                      <IoBagOutline size={20} /> BAG
                    </Button>
                    <Button
                      style={{ background: "#AB68EF", border: "none" }}
                      onClick={() =>
                        handleRemoveFromWishlist({
                          productId: productItem.productId?._id,
                        })
                      }
                    >
                      <AiOutlineDelete size={20} /> Remove
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default WishList;
