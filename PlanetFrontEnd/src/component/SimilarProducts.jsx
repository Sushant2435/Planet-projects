import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { getSimilarProducts } from "../features/product/productSlice"; // Import the thunk

const SimilarProducts = ({ productId }) => {
  const dispatch = useDispatch();

  // Selectors to access state
  const similarProducts = useSelector((state) => state.products.similarProducts);
  const similarProductsStatus = useSelector((state) => state.products.similarProductsStatus);
  const similarProductsError = useSelector((state) => state.products.similarProductsError);

  // Fetch similar products when the component mounts
  useEffect(() => {
    dispatch(getSimilarProducts(productId));
  }, [dispatch, productId]);

  function handleCardClick(product) {
    window.open(`/products/${product._id}`, '_blank');
  }
  // Handlers for adding to cart and wishlist
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to the cart successfully");
  };
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    toast.success("Product added to the wishlist");
  };
  // Loading and error handling
  if (similarProductsStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (similarProductsStatus === "failed") {
    return <div>Error: {similarProductsError}</div>;
  }
  // Handle empty similar products
  if (!Array.isArray(similarProducts) || similarProducts.length === 0) {
    return <div>No similar products found.</div>;
  }
  return (
    <div>
      <h2>SIMILAR PRODUCTS:</h2>
      <div className="d-flex justify-content-around flex-wrap rel">
        {similarProducts.map((productItem) => (
          <Card
            key={productItem._id}
            style={{
              width: 250,
              height: 450,
              marginLeft: 10,
              marginBottom: 30,
              borderRadius: 10,
            }}
            className="mobile-card"
          >
            <Card.Img
              onClick={() => handleCardClick(productItem)}
              loading="lazy"
              className="w-100"
              variant="top"
              src={productItem.images[0]} // Accessing the first image
              style={{
                width: 145,
                height: 320,
                backgroundSize: "contain",
                cursor: "pointer",
              }}
            />
            <Card.Body>
              <Card.Title className="cardTitle" style={{ fontSize: 16 }}>
                {productItem.name}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: 12 }}>
                {productItem.description}
              </Card.Subtitle>

              <span>
                Sizes: {productItem.size.join(", ")}
                <del className="text-danger" style={{ marginLeft: 50 }}>
                  ₹{productItem.basePrice}
                </del>{" "}
                ₹{productItem.finalPrice}
              </span>
              <div className="abs">
                <button onClick={() => handleAddToCart(productItem)}>
                  <IoBagOutline size={18} /> ADD
                </button>
              </div>
              <div className="wishabs">
                <button style={{ border: "none" }}>
                  <FaRegHeart
                    onClick={() => handleAddToWishlist(productItem)}
                    style={{ color: "red" }}
                    size={25}
                  />
                </button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
