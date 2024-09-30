import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowRoundForward } from "react-icons/io";

const SportsWear = () => {
  return (
    <Container
      fluid
      className="custom-container-height"
      style={{
        // height: 671,
        background: "#EEE9DC",
        // padding: "10px 5px",
      }}
    >
      <Row
        className="justify-content-center align-items-center"
        style={{
          marginTop: 50,
        }}
      >
        <Col xs={12} md={6} lg={6}>
          <div className="sports" style={{ marginLeft: 20 }}>
            <h3>
              SERVING <sup>HOT STYLE</sup> <br />
              <span
                className="aesthetic"
                style={{ borderBottom: "4px solid #000C22" }}
              >
                FOR HER
              </span>
              <span
                style={{
                  background: "#491E4B",
                  color: "white",
                  borderRadius: 5,
                  padding: 5,
                  marginLeft: "5px", // Added margin for spacing
                }}
              >
                30%
              </span>{" "}
              OFF
            </h3>
            <p>
              Running shoes for a walk around the city or bicycles to the
              office? Why not! Our stylists offer not to be afraid to mix sports
              things with everyday ones.
            </p>
            <button>
              SHOP NOW <IoIosArrowRoundForward />
            </button>
          </div>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <img
            className="img-fluid"
            style={{ marginTop: 30 }}
            src="/sports_clothes_img/Photo (16).jpg"
            alt=""
          />
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} style={{ marginTop: 40 }}>
        <Col className="mb-4">
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src="/sports_clothes_img/Photo (12).jpg"
              alt="product pic"
            />
          </div>
          <div>
            <h6>BALMAIN</h6>
            <p>
              Glasses
              <span style={{ marginLeft: 120 }}>
                Rs. 19<del>₹29</del>
              </span>
            </p>
          </div>
        </Col>
        <Col className="mb-4">
          <div>
            <div>
              <img
                src="/sports_clothes_img/Photo (13).jpg"
                alt="product pic"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div>
              <h6>BALMAIN</h6>
              <p>
                Glasses
                <span style={{ marginLeft: 120 }}>
                  Rs. 19 <del>₹29</del>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col className="mb-4">
          <div>
            <div>
              <img
                src="/sports_clothes_img/Photo (14).jpg"
                alt="product pic"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div>
              <h6>BALMAIN</h6>
              <p>
                Glasses
                <span style={{ marginLeft: 120 }}>
                  Rs. 19 <del>₹29</del>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col className="mb-4">
          <div>
            <div>
              <img
                src="/sports_clothes_img/Photo (15).jpg"
                alt="product pic"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div>
              <h6>BALMAIN</h6>
              <p>
                Glasses
                <span style={{ marginLeft: 120 }}>
                  Rs.19 <del>₹29</del>
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SportsWear;

// import { Col, Container, Row } from "react-bootstrap";
// import { IoIosArrowRoundForward } from "react-icons/io";

// const SportsWear = () => {
//   return (
//     <Container
//       style={{
//         height: 671,
//         background: "#EEE9DC",
//       }}
//     >
//       <Row
//         style={{
//           width: 1050,
//           marginLeft: 15,
//           marginTop: 50,
//         }}
//       >
//         <Col>
//           <div className="sports">
//             <h3>
//               MATCH <sup>SPORTY</sup> <br />
//               <span
//                 className="aesthetic"
//                 style={{ borderBottom: "4px solid #000C22" }}
//               >
//                 AESTHETIC
//               </span>
//               <span
//                 style={{
//                   background: "#491E4B",
//                   color: "white",
//                   borderRadius: 5,
//                   padding: 5,
//                 }}
//               >
//                 30%
//               </span>{" "}
//               OFF
//             </h3>
//             <p>
//               Running shoes for a walk around the city or bicycles to the
//               office? Why not! Our stylists offer not to be afraid to mix sports
//               things with everyday ones.
//             </p>
//             <button>
//               SHOP NOW <IoIosArrowRoundForward />
//             </button>
//           </div>
//         </Col>
//         <Col>
//           <img
//             // className="w-100"
//             style={{ marginTop: 30 }}
//             src="/sports_clothes_img/Photo (16).jpg"
//             alt=""
//           />
//         </Col>
//       </Row>
//       <Row lg={3} style={{ marginTop: 40 }}>
//         <Col lg={3}>
//           <div>
//             <img
//               style={{ width: "266.88px", height: "335.28px" }}
//               src="/sports_clothes_img/Photo (12).jpg"
//               alt="product pic"
//             />
//           </div>
//           <div>
//             <p>Glasses</p>
//             <h6>
//               BALMAIN
//               <span>
//                 <del>29$</del> 19$
//               </span>
//             </h6>
//           </div>
//         </Col>
//         <Col lg={3}>
//           <div>
//             <div>
//               <img
//                 src="/sports_clothes_img/Photo (13).jpg"
//                 alt="product pic"
//                 style={{ width: "266.88px", height: "335.28px" }}
//               />
//             </div>
//             <div>
//               <p>Glasses</p>
//               <h6>
//                 BALMAIN
//                 <span>
//                   <del>29$</del> 19$
//                 </span>
//               </h6>
//             </div>
//           </div>
//         </Col>
//         <Col lg={3}>
//           <div>
//             <div>
//               <img
//                 src="/sports_clothes_img/Photo (14).jpg"
//                 alt="product pic"
//                 style={{ width: "266.88px", height: "335.28px" }}
//               />
//             </div>
//             <div>
//               <p>Glasses</p>
//               <h6>
//                 BALMAIN
//                 <span>
//                   <del>29$</del> 19$
//                 </span>
//               </h6>
//             </div>
//           </div>
//         </Col>
//         <Col lg={3}>
//           <div>
//             <div>
//               <img
//                 src="/sports_clothes_img/Photo (15).jpg"
//                 alt="product pic"
//                 style={{ width: "266.88px", height: "335.28px" }}
//               />
//             </div>
//             <div>
//               <p>Glasses</p>
//               <h6>
//                 BALMAIN
//                 <span>
//                   <del>29$</del> 19$
//                 </span>
//               </h6>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SportsWear;
