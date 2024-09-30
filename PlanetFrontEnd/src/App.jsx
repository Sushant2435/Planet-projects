import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopNav from "./component/Navbar";
import Home from "./pages/Home";
// import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import ReturnsExchangePolicy from "./pages/ReturnsExchangePolicy";
import ReturnExchangeRequest from "./pages/ReturnExchangeRequest";
import TractOrder from "./pages/TrackOrder";
import MenProductDetails from "./component/MenProductDetails";
import Footer from "./component/Footer";
// import ProductDetailNewTab from "./component/ProductDetailNewTab";
import Footwear from "./pages/Footwear";
import Address from "./pages/Address";
import Error from "./pages/Error";
import PaymentPage from "./pages/PaymentPage";
import CODPage from "./pages/CODPage";
import MyOrder from "./pages/MyOrder";
import FAQ from "./pages/FAQ";
import TermAndCondition from "./pages/TermAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignUpForm from "./component/SignUpForm";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <TopNav />
        {/* <Banner /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/kids" element={<Kids />} /> */}
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/returnsexchangepolicy" element={<ReturnsExchangePolicy />} />
          <Route path="/returnexchangerequest" element={<ReturnExchangeRequest />} />
          <Route path="/trackOrder" element={<TractOrder />} />
          <Route path="/products/:id" element={<MenProductDetails />} />
          {/* <Route path="/product-new-tab/:id" element={<ProductDetailNewTab />} /> */}
          <Route path="/address" element={<Address />} />
          <Route path="/*" element={<Error />} />
          <Route path="/payment_page" element={<PaymentPage />} />
          <Route path="/cash_on_delivery" element={<CODPage />} />
          <Route path="/order_page" element={<MyOrder />} />
          <Route path="/faq_page" element={<FAQ />} />
          <Route path="/term_&_condition" element={<TermAndCondition />} />
          <Route path="/refund_policy" element={<RefundPolicy />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/sign_up_form" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
