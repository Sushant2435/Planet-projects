import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";
import Stack from "react-bootstrap/Stack";
import Carousel from "../component/Carousel";
import ListOfProduct from "../component/ListOfProduct";
import WomenDresses from "../component/WomenDresses";
import Banner from "../component/Banner";
import SportsWear from "../component/SportsWear";
import { NavLink } from "react-router-dom";
import FollowUsOnInstagram from "../component/FollowUsOnInstagram";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMenProducts,
  fetchProductsByCategory,
  fetchProductsBySubCategoryMale,
  fetchWomenProducts,
} from "../features/product/productSlice";
import { useEffect, useState } from "react";

import BannerImages1 from "/images/Banner_men1.png";
import BannerImages2 from "/images/Banner_women1.png";
import BannerImages3 from "/images/Banner_women2.png";
import BannerImages4 from "/images/Banner_men2.png";
import BannerImages5 from "/images/Banner_footwear1.png";
import BannerImages6 from "/images/Banner_footwear3.png";
import BannerImages7 from "/images/Banner_women3.png";
import BannerImages8 from "/images/Banner_footwear2.png";
import {
  fetchnewArrivalForMen,
  fetchnewArrivalForWomen,
} from "../features/product/newArrivalSlice";

const arrayOfImg = [
  "/instaimg/image (1).jpg",
  "/instaimg/image (2).jpg",
  "/instaimg/image (3).jpg",
  "/instaimg/image (4).jpg",
  "/instaimg/image (5).jpg",
  "/instaimg/image (6).jpg",
  "/instaimg/image (7).jpg",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));

const bannerImages = [
  {
    id: 1,
    image: BannerImages1,
    link: "www.facebook.com",
  },
  {
    id: 2,
    image: BannerImages2,
  },
  {
    id: 3,
    image: BannerImages3,
  },
  {
    id: 4,
    image: BannerImages4,
  },
  {
    id: 5,
    image: BannerImages5,
  },
  {
    id: 6,
    image: BannerImages6,
  },
  {
    id: 7,
    image: BannerImages7,
  },
  {
    id: 8,
    image: BannerImages8,
  },
];

const Home = () => {
  const dispatch = useDispatch();

  // Fetch product data and statuses from the Redux store
  const menProducts = useSelector((state) => state.products.menProducts);
  const womenProducts = useSelector((state) => state.products.womenProducts);
  const menLoading = useSelector((state) => state.products.menLoading);
  const womenLoading = useSelector((state) => state.products.womenLoading);
  const menError = useSelector((state) => state.products.menError);
  const womenError = useSelector((state) => state.products.womenError);
  const menNewArrival = useSelector((state) => state.newArrival.newArrivalForMen);
  const womenNewArrival = useSelector((state) => state.newArrival.newArrivalForWomen);

  console.log(menNewArrival, "Men New Arrivaladadadadadadadda");
  console.log("Wonem New Arrival", womenNewArrival, "women New Arrival ");

  const [active, setActive] = useState("men");
  const [activeStack, setActiveStack] = useState("shirts");


  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  useEffect(() => {
    dispatch(fetchnewArrivalForMen());
    dispatch(fetchnewArrivalForWomen());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMenProducts());
    dispatch(fetchWomenProducts());
  }, [dispatch]);
  const shirtFilter = {category: "Male", subCategory: "Shirt"}
  const tshirtFilter = {category: "Male", subCategory: "Shirt"}
  const jeansFilter = {category: "Male", subCategory: "Jeans"}

  return (
    <>
      <Banner bannerImages={bannerImages} />
      <Container>
        <h1 className="heading">SHOP BY CATEGORY</h1>
        <Row>
          <Col>
            <div className="relative">
              <div className="title" style={{ paddingTop: 40, marginLeft: 30 }}>
                <h5>Men Fashion</h5>
                <NavLink
                  to="/men"
                  onClick={() => dispatch(fetchProductsByCategory("Male"))}
                >
                  <button className="w-75">
                    VIEW <IoIosArrowRoundForward />
                  </button>
                </NavLink>
              </div>
              <div className="absolute1">
                <img src="/images/pngwing.com (87) 1.png" alt="prodmen" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="relative" style={{ background: "#42f2f5" }}>
              <div className="title" style={{ paddingTop: 40, marginLeft: 30 }}>
                <h5>Women Fashion</h5>
                <NavLink
                  to="women"
                  onClick={() => dispatch(fetchProductsByCategory("Female"))}
                >
                  <button className="w-75">
                    VIEW <IoIosArrowRoundForward />
                  </button>
                </NavLink>
              </div>
              <div className="absolute">
                <img
                  src="/images/Shopping-removebg-preview 1.png"
                  alt="prodmen"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="relative" style={{ background: "#f5425d" }}>
              <div className="title" style={{ paddingTop: 40, marginLeft: 30 }}>
                <h5>Footwear Fashion</h5>
                <NavLink
                  to="/footwear"
                  onClick={() => dispatch(fetchProductsByCategory("shoes"))}
                >
                  <button className="w-75">
                    VIEW <IoIosArrowRoundForward />
                  </button>
                </NavLink>
              </div>
              <div className="absolute">
                <img src="/footweat-img/footwear.png" alt="prodmen" />
              </div>
            </div>
          </Col>
        </Row>

        <Stack
          className="justify-content-center genre"
          direction="horizontal"
          gap={5}
        >
          <button onClick={() => {
           
           dispatch( fetchProductsBySubCategoryMale(`${shirtFilter.category}&subCategory=${shirtFilter.subCategory}`))
            setActiveStack("shirts")
          }} 
           style={{
              width: 130,
              height: 30,
              borderRadius: 10,
             border:"none",
              background: activeStack === "shirts" ? "#000000" : "#f0efef",
              color: activeStack === "shirts" ? "#FFFFFF" : "rgb(155, 153, 153)",
            }}>SHIRTS</button>
          <button onClick={() => {
           dispatch( fetchProductsBySubCategoryMale(`${tshirtFilter.category}&subCategory=${tshirtFilter.subCategory}`))
          setActiveStack("tshirt")}

          }
          style={{
              width: 130,
              height: 30,
              border:"none",
              borderRadius: 10,
              background: activeStack === "tshirt" ? "#000000" : "#f0efef",
              color: activeStack === "tshirt" ? "#FFFFFF" : "rgb(155, 153, 153)",
            }}
          >T-SHIRTS</button>
          <button onClick={() => 
          {
           dispatch( fetchProductsBySubCategoryMale(`${jeansFilter.category}&subCategory=${jeansFilter.subCategory}`))
          setActiveStack("jeans")}

          }
          style={{
              width: 130,
              height: 30,
              border:"none",
              borderRadius: 10,
              background: activeStack === "jeans" ? "#000000" : "#f0efef",
              color: activeStack === "jeans" ? "#FFFFFF" : "rgb(155, 153, 153)",
            }}
          >JEANS</button>
        </Stack>
        <Carousel
          products={menProducts}
          loading={menLoading}
          error={menError}
        />
        <ListOfProduct />
        <WomenDresses />
        <Banner bannerImages={bannerImages} />

        {/* new arrivals */}

        <Stack direction="horizontal" gap={3} style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 32 }}>New Arrivals</h3>

          <button
            onClick={() => setActive("men")}
            style={{
              width: 207,
              height: 56,
              borderRadius: 10,
              border: "none",
              background: active === "men" ? "#000000" : "#f0efef",
              color: active === "men" ? "#FFFFFF" : "rgb(155, 153, 153)",
            }}
          >
            Men's Fashion
          </button>
          <button
            onClick={() => setActive("women")}
            style={{
              width: 207,
              height: 56,
              borderRadius: 10,
              border: "none",
              background: active === "women" ? "#000000" : "#f0efef",
              color: active === "women" ? "#FFFFFF" : "rgb(155, 153, 153)",
            }}
          >
            Women's Fashion
          </button>
        </Stack>
        {active === "men" && (
          <Carousel
            products={menProducts}
            loading={menLoading}
            error={menError}
          />
        )}

        {active === "women" && (
          <Carousel
            products={womenProducts}
            loading={womenLoading}
            error={womenError}
          />
        )}

        <SportsWear />
      </Container>
      <FollowUsOnInstagram images={arrayOfImg} speed={9000} />
    </>
  );
};

export default Home;
