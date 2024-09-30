import { useEffect } from "react";
import { Container } from "react-bootstrap";

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container style={{ marginBottom: 30, marginTop: 90 }}>
        <h3 style={{ textAlign: "center", fontSize: 36, marginTop: 30 }}>
          PRIVACY AND POLICY
        </h3>
        <p>
          Planet Clothing ("we," "us," or "our") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website
         <a style={{padding:"5px"}} href="https://www.planetclothing.shop">(planetclothing.shop)</a>  the Site, purchase products, or interact with
          us in other ways.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>1.Information We Collect </p>
        <p>
          <strong>Personal Information:</strong> When you make a purchase,
          create an account, or contact us, we may collect personal information
          such as your name, email address, phone number, billing address, and
          shipping address. Payment Information: If you make a purchase, we
          collect payment details such as credit card numbers and billing
          information. Note that we do not store full credit card numbers; they
          are processed securely by our payment processor. Browsing Information:
          We collect information about your interactions with our Site,
          including IP addresses, browser types, and pages visited. We may use
          cookies and similar technologies to enhance your experience and
          analyze website usage.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>
          2.How We Use Your Information{" "}
        </p>
        <p>
          We use your information to: Process and fulfill your orders.
          Communicate with you about your orders, products, and services.
          Improve our Site, products, and services. Send promotional materials,
          if you have opted in to receive them. Respond to customer service
          requests and provide support. Comply with legal obligations and
          enforce our terms and policies.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>
          3.How We Share Your Information{" "}
        </p>
        <p>
          <strong>Service Providers:</strong> We may share your information with
          third-party service providers who perform services on our behalf, such
          as payment processing, shipping, and marketing.
        </p>
        <p>
          <strong>Legal Requirements:</strong> We may disclose your information
          if required by law or in response to valid requests by public
          authorities (e.g., to meet national security or law enforcement
          requirements).
        </p>
        <p>
          <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or other business transaction, your information may be
          transferred as part of that transaction.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>4.Data Security</p>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, use, or disclosure. However, no
          method of transmission over the internet or electronic storage is
          completely secure, so we cannot guarantee absolute security.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>5.Your Choices</p>
        <p>
          <strong>Access and Correction:</strong> You can access and update your
          personal information by logging into your account or contacting us.
          Marketing Communications: You can opt out of receiving marketing
          communications by following the unsubscribe instructions provided in
          those communications or by contacting us directly. Cookies: Most web
          browsers allow you to manage cookies through their settings. Please
          note that disabling cookies may affect your experience on our Site.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>6.Children’s Privacy</p>
        <p>
          Our Site is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under 13. If we
          become aware that we have collected personal information from a child
          under 13, we will take steps to delete it.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>
          7.Changes to This Privacy Policy
        </p>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our Site. Your
          continued use of the Site after any changes constitutes your
          acceptance of the updated Privacy Policy.
        </p>
        <p style={{ marginTop: 30, fontSize: 22 }}>8.Contact Us</p>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p>
          Email:
          <a href="mailto:contact@planetclothing.com">
            contact@planetclothing.com
          </a>
        </p>
        <p>Phone: <a href="tel:7865939895">+91-7865939895</a>, <a href="tel:1204851109">+91-1204851109</a></p>
        <p>Address: T-4 A-88 Sector 4, Noida, Uttar Pradesh - 201301, India</p>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
