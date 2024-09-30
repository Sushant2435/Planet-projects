import { useState, useEffect } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { addToWishlist } from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Custom hook to get the current window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const CustomCarousel = ({ products, loading, error }) => {
  const [index, setIndex] = useState(0);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  const windowWidth = useWindowWidth();

  // Determine number of items per slide based on screen width
  const itemsPerSlide = windowWidth >= 992 ? 4 : windowWidth >= 768 ? 2 : 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prevIndex) =>
          (prevIndex + 1) % Math.ceil(products?.data?.length / itemsPerSlide)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [products?.data?.length, itemsPerSlide]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(
      index === 0
        ? Math.ceil(products?.data?.length / itemsPerSlide) - 1
        : index - 1
    );
  };

  const handleNext = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(products?.data?.length / itemsPerSlide)
    );
  };

  function handleCardClick(product) {
    navigate(`/products/${product._id}`);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Adjusting the chunking logic to reflect all data properly
  const chunkedProducts = [];
  for (let i = 0; i < products?.data?.length; i += itemsPerSlide) {
    chunkedProducts.push(products.data.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="carousel-container">
      <Carousel
        fade
        indicators={false}
        nextIcon={<BsChevronRight />}
        prevIcon={<BsChevronLeft />}
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
      >
        {chunkedProducts?.map((chunk, idx) => (
          <Carousel.Item key={idx}>
            <div className="carousel_item">
              {chunk.map((card, cardIndex) => (
                <div key={cardIndex} className="carousel_card">
                  <Card
                    onClick={() => handleCardClick(card)}
                    className="custom-card"
                    style={{ height: 445 }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.images[0]}
                     alt="Product Image"
                      className="card-img"
                      style={{ cursor: "pointer" }}
                    />
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted">
                        {card.name}
                      </Card.Subtitle>
                      <Card.Subtitle className="cardTitle">
                        {card.title}
                      </Card.Subtitle>
                      <p>
                        <span>
                          Rs. {card.finalPrice}
                          <del
                            className="text-danger"
                            style={{
                              fontStyle: "italic",
                              marginLeft: 10,
                              fontSize: 12,
                            }}
                          >
                            ₹{card.basePrice}
                          </del>
                          <span
                            className="text-success"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {card?.discountPrice ? (
                              <>({card?.discountPrice} % OFF)</>
                            ) : null}
                          </span>
                        </span>
                      </p>
                      {/* Uncomment your add to cart and wishlist button code if needed */}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-arrow-left" onClick={handlePrev}>
        <BsChevronLeft />
      </div>
      <div className="carousel-arrow-right" onClick={handleNext}>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default CustomCarousel;
