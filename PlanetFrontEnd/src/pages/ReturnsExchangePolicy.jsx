import { useEffect } from "react";
import { Container } from "react-bootstrap";

const ReturnsExchangePolicy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ marginBottom: 30, marginTop: 90 }}>
        <h3 style={{ textAlign: "center", fontSize: 36, marginTop: 30 }}>
          RETURNS/EXCHANGE POLICY
        </h3>
        <p style={{ marginTop: 30, fontSize: 22 }}>Return Policy : </p>
        <p>
          At Planet Clothing, we want you to be completely satisfied with your
          purchase. If for any reason you are not satisfied, we offer a flexible
          return policy.
          {/* <br />
          <br />
          To Place Return/Echange request,{" "}
          <NavLink to="/returnexchangerequest">Click Here</NavLink> */}
        </p>
        <ul>
          <li>Returns are accepted within 7 days of delivery.</li>
          <li>Items must be in original condition with tags attached.</li>
          <li>Refunds will be issued in the original form of payment.</li>
          <li>Shipping costs are non-refundable.</li>
        </ul>
        <p>
          To initiate a return, please contact our customer service team at
          (Planet.clothingsales@gmail.com or +91 7865939895).
        </p>
        <p style={{ fontSize: 22 }}>Exchange Policy :</p>
        <p>
          If you would like to exchange an item for a different size or style,
          please follow these steps:
        </p>
        <ul>
          <li>
            Contact our customer service team at (Planet.clothingsales@gmail.com
            or +91 7865939895) to obtain an exchange authorization.
          </li>
          <li>Return the original item within 7 days of delivery.</li>
          <li>
            Once we receive the returned item, we will ship out the exchanged
            item.
          </li>
        </ul>
        <p>
          Please note that shipping costs for exchanges are the responsibility
          of the customer.
        </p>
        <p style={{ fontSize: 22 }}>Privacy Policy: </p>
        <p>
          At Planet clothing, we value your privacy and security. We collect
          personal information such as name, email address, and shipping address
          in order to process your order and provide customer service.
        </p>
        <ul>
          <li>
            We will not share your personal information with third parties.
          </li>
          <li>We use industry-standard encryption to protect your data.</li>
          <li>
            You have the right to access and correct your personal information.
          </li>
        </ul>
        <h5>By shopping with us, you consent to our privacy policy</h5>
      </Container>
    </>
  );
};

export default ReturnsExchangePolicy;
