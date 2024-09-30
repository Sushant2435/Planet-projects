import Layout from "../../Components/Layout";
import Sidebar from "../../Components/Sidebar/index";
import "./style.css";
import DashboardCard from "../../Components/DashboardCard";
import { RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Button from "../../Components/library/Button";
import DashboardGraph from "../../Components/DashboardGraph";

const Dashboard = () => {
  const [dashboardCard, setDashboardCard] = useState([
    {
      heading: "Today's Sales",
      price: "₹10,108",
      difference: "1.78% vs last weeek",
    },
    {
      heading: "Today's Revenue",
      price: "₹10,108",
      difference: "1.78% vs last weeek",
    },
    {
      heading: "Today's Customer",
      price: "₹10,108",
      difference: "1.78% vs last weeek",
    },
    {
      heading: "Today's Store",
      price: "₹10,108",
      difference: "1.78% vs last weeek",
    },
  ]);
  return (
    <Layout>
      <div className="dashboard_mid_container">
        <div className="dashboard_header">
          <div className="dashboard_heading">
            <h2>Dashboard</h2>
            <p>A quick data overview of the inventory</p>
          </div>
          <Button text="Download Report"><span> <IoIosArrowDown /> </span></Button>
        </div>
        <div className="dashboard_cards">
          {dashboardCard.map((item) => {
            return (
              <DashboardCard
                heading={item.heading}
                price={item.price}
                difference={item.difference}
              />
            );
          })}
        </div>
        {/* <DashboardGraph/> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
