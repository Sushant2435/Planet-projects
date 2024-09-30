import { Col, Container, Row } from "react-bootstrap";
import FootwearBanner from "../component/FootwearBanner";
import FootwearFilter from "../component/FootwearFilter";
import FootwearProduct from "../component/FootwearProduct";
import { useEffect } from "react";

const Footwear = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
      <div className="w-100">
        <FootwearBanner />
      </div>
      <Container className="mt-4" fluid>
        <Row>
          <Col lg={2}>
            <FootwearFilter />
          </Col>
          <Col lg={10}>
            <FootwearProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footwear;
