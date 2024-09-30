import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const RefundPolicy = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    })
    
  return (
    <>
      <Container style={{ marginBottom: 30, marginTop: 90 }}>
        <h3 style={{ textAlign: "center", fontSize: 36, marginTop: 30 }}>
          REFUND POLICY
        </h3>
        <p>
          At Our Planet Clothing, we believe in providing quality products and
          excellent customer service. If you’re not completely satisfied with
          your purchase, we’re here to help!
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>1.Returns </p>
        <p>
          You may return any unworn, unwashed, and undamaged items within 30
          days of receiving your order. Please include the original tags and
          packaging.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>2.Refunds</p>
        <p>
          Once we receive your returned item, we will process your refund within
          5-7 business days. Refunds will be issued to the original payment
          method.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>3.Exchanges</p>
        <p>
          If you wish to exchange an item for a different size or color, please
          return the original item and place a new order.
        </p>

        <p style={{ marginTop: 30, fontSize: 22 }}>4.Non-Returnable Items</p>
        <p>Gift cards and items marked as final sale cannot be returned.</p>

        <p style={{ marginTop: 30, fontSize: 22 }}>5.Shipping Costs</p>
        <p>
          Customers are responsible for return shipping costs unless the item is
          defective or the wrong item was sent. Thank you for supporting Our
          Planet Clothing! Together, we can make a difference.
        </p>

        <p style={{ marginTop: 30, fontSize: 22 }}>
          6.How to Initiate a Return
        </p>
        <p>
          Contact our customer service team at{" "}
          <p>
            {" "}
            Email:
            <a href="mailto:contact@planetclothing.com">
              contact@planetclothing.com
            </a>
          </p>
          <p>
            {" "}
            Phone: <a href="tel:7865939895">+91-7865939895</a>,{" "}
            <a href="tel:1204851109">+91-1204851109</a>{" "}
          </p>
          <p>
            to request a return authorization. Package your item securely and
            include a copy of your order confirmation. Ship the package to the
            address provided by our customer service team.
          </p>
        </p>
      </Container>
    </>
  );
};

export default RefundPolicy;
