/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = ({ bannerImages }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);


  const getImageHeight = () => {
    if (windowWidth < 576) return "110px"; 
    if (windowWidth < 768) return "200px"; 
    if (windowWidth < 992) return "250px"; 
    return "331px"; 
  };
  return (
    <>
      <Carousel style={{ marginTop: 68, marginBottom: 20 }}>
        {bannerImages?.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
         
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
                style={{ height: getImageHeight() }}
              />
              
              <Carousel.Caption>
                {/* <h2>{hero.title}</h2>
                    <p>{hero.description}</p> */}
                {/* <a className="btn btn-primary" href={hero.link}>Shop Now</a> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default Banner;