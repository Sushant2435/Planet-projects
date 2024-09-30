import { Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { IoIosArrowRoundForward } from "react-icons/io";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WomenDresses = () => {
  return (
    <Container style={{ marginTop: 30, marginBottom: 30 }}>
      <Stack className="women" direction="horizontal" gap={3}>
        <h1>DRESS</h1>
        <button>
          SHOP NOW <IoIosArrowRoundForward />
        </button>
      </Stack>
      <Row xs={1} sm={2} md={3} lg={4}>
        <Col>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (1).jpeg"
              alt="product pic"
            />
          </div>
          <div className="prodDetails">
            <h6>BALMAIN </h6>
            <p>
              Glasses
              <span style={{ marginLeft: 120 }}>
                <del>₹29</del> ₹19
              </span>
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <div>
              <img
                src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (2).jpeg"
                alt="product pic"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="prodDetails">
              <h6>BALMAIN </h6>
              <p>
                Glasses
                <span style={{ marginLeft: 120 }}>
                  <del>₹29</del> ₹19
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div>
              <img
                src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (3).jpeg"
                alt="product pic"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="prodDetails">
              <h6>BALMAIN </h6>
              <p>
                Glasses
                <span style={{ marginLeft: 120 }}>
                  <del>₹29</del> ₹19
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <div className="fourthCol">
              <h3>SHOW ALL DRESSES</h3>
              <button>
                SHOW NOW <IoIosArrowRoundForward />
              </button>
            </div>
            <div className="right_side_img">
              <img
                src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (4).jpeg"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
              <img
                src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26.jpeg"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WomenDresses;

// import { Container } from "react-bootstrap";
// import Stack from "react-bootstrap/Stack";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const WomenDresses = () => {
//   return (
//     <Container style={{ marginTop: 30, marginBottom: 30 }}>
//       <Stack className="women" direction="horizontal" gap={3}>
//         <h1>DRESS</h1>
//         <button>
//           SHOP NOW <IoIosArrowRoundForward />
//         </button>
//       </Stack>
//       <Row lg={3}>
//         <Col lg={3}>
//           <div>
//             <img
//               style={{ width: "266.88px", height: "335.28px" }}
//               src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (1).jpeg"
//               alt="product pic"
//             />
//           </div>
//           <div className="prodDetails">
//             <p>Glasses</p>
//             <h6>
//               BALMAIN{" "}
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
//                 src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (2).jpeg"
//                 alt="product pic"
//                 style={{ width: "266.88px", height: "335.28px" }}
//               />
//             </div>
//             <div className="prodDetails">
//               <p>Glasses</p>
//               <h6>
//                 BALMAIN{" "}
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
//                 src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (3).jpeg"
//                 alt="product pic"
//                 style={{ width: "266.88px", height: "335.28px" }}
//               />
//             </div>
//             <div className="prodDetails">
//               <p>Glasses</p>
//               <h6>
//                 BALMAIN{" "}
//                 <span>
//                   <del>29$</del> 19$
//                 </span>
//               </h6>
//             </div>
//           </div>
//         </Col>
//         <Col lg={3}>
//           <div>
//             <div className="fourthCol">
//               <h3>SHOW ALL DRESSES</h3>
//               <button>
//                 SHOW NOW <IoIosArrowRoundForward />
//               </button>
//             </div>
//             <div className="right_side_img">
//               <img
//                 src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26 (4).jpeg"
//                 alt=""
//               />
//               <img
//                 src="/dresspic/WhatsApp Image 2024-08-13 at 16.19.26.jpeg"
//                 alt=""
//               />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default WomenDresses;
