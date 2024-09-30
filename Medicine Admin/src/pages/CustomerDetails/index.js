import { useState } from "react";
import Layout from "../../Components/Layout";
import OrderList from "../../Components/pages/OrderList";
import "./style.css";

const CustomerDetails = () => {
  const [customerDetails , setCustomerDetails] = useState(["abcd" , "Abcd@gmail.com" , "9876543289" ,"10-2-24" , " No.20 Udoette Street, Ikpa Rd, Ajah Bus Stop Lagos Mainland,Lagos, Nigeria" , "No.219 Solomade Street, Ikorodu, Mainland, Lagos, Nigeria" , "2 minutes ago"]);
  return (
    <Layout>
      <h3 className="customer_header">Customer Details</h3>
        <div className="customer_details_container">
          <div className="customer_details_photo">
          <span>Customer Details</span>
          <img className="customer_profile"></img>
          </div>
          <span className="customer_details">
            <span> 
              <h5>First Name</h5>
              <p>Abcd</p>
            </span>
            <span>
              <h5>Email Address</h5>
              <p>Abcd@gmail.com</p>
            </span>
            <span>
              <h5>Phone Number</h5>
              <p>9876543289</p>
            </span>
            <span>
              <h5>Joining Date</h5>
              <p>10-2-24</p>
            </span>
            <span>
              <h5>Delivery Address</h5>
              <p>
                No.20 Udoette Street, Ikpa Rd, Ajah Bus Stop Lagos Mainland,
                Lagos, Nigeria
              </p>
            </span>
            <span>
              <h5>Shop Address</h5>
              <p>No.219 Solomade Street, Ikorodu, Mainland, Lagos, Nigeria</p>
            </span>
            <span>
              <h5>Last Seen</h5>
              <p>2 minutes ago</p>
            </span>
          </span>
      </div>
      <OrderList />
    </Layout>
  );
};

export default CustomerDetails;
