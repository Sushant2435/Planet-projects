import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import HomeIcon from "../Icons/HomeIcon";
import DownArrowIcon from "../Icons/DownArrowIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import BoxIcon from "../Icons/BoxIcon";
import DelhiverycarIcon from "../Icons/DelhiverycarIcon";
import TagIcon from "../Icons/TagIcon";
import UsersIcon from "../Icons/UsersIcon";
import DebitCardIcon from "../Icons/DebitCardIcon";
import BrandsIcon from "../Icons/BrandsIcon";
import LogoutIcon from "../Icons/LogoutIcon";

const Sidebar = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);
  const [hotOfferDropdown, setOfferDropdown] = useState(false);
  const [customerDropdown, setCustomerDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandsDropdown, setBrandsDropdown] = useState(false);
  const [paymentDropdown, setPaymentDropdown] = useState(false);

  const navigate = useNavigate();

  const toggleBrandsDropdown = () => {
    setBrandsDropdown(!brandsDropdown);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
  };

  const toggleOrderDropdown = () => {
    setOrderDropdown(!orderDropdown);
  };

  const toggleHotOfferDropdown = () => {
    setOfferDropdown(!hotOfferDropdown);
  };

  const toggleCustomerDropdown = () => {
    setCustomerDropdown(!customerDropdown);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
  };

  const togglePaymentDropdown = () => {
    setPaymentDropdown(!paymentDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    const confirLogout = confirm("Do you want to logout")
    if (confirLogout) {
      navigate("/");
    }
  };

  return (
    <div className="w-64 bg-white h-screen shadow-lg mt-20">
      <div className="flex flex-col p-4 space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 p-2 rounded-md bg-gray-100 text-blue-600"
              : "flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
          }
        >
          {/* <FaHome className="text-lg" /> */}
          <HomeIcon />
          <span className="w-24">Dashboard</span>
        </NavLink>

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={toggleProductsDropdown}
        >
          <BoxIcon />

          <span className="w-24">Products</span>
          {productsDropdown ? (
            <DownArrowIcon className="ml-auto" />
          ) : (
            <RightArrowIcon className="ml-auto" />
          )}
        </div>

        {productsDropdown && (
          <div className="flex flex-col space-y-2 ml-4">
            <NavLink
              to="/AddProduct"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Add Product
            </NavLink>
            <NavLink
              to="/ProductList"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Product List
            </NavLink>

            <div
              className="flex items-center space-x-2 cursor-pointer hover:text-blue-600"
              onClick={toggleCategoryDropdown}
            >
              <span className="w-28">Category</span>
              {categoryDropdown ? <DownArrowIcon /> : <RightArrowIcon />}
            </div>

            {categoryDropdown && (
              <div className="flex flex-col space-y-2 ml-4">
                <NavLink
                  to="/AddCategory"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "hover:text-blue-600 transition-colors p-2"
                  }
                >
                  Add Category
                </NavLink>
                <NavLink
                  to="/AddSubCategory"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "hover:text-blue-600 transition-colors p-2"
                  }
                >
                  Add Sub Category
                </NavLink>
                <NavLink
                  to="/CategoryList"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 p-2 rounded"
                      : "hover:text-blue-600 transition-colors p-2"
                  }
                >
                  Category List
                </NavLink>
              </div>
            )}
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={toggleOrderDropdown}
        >
          <DelhiverycarIcon />

          <span className="w-24">Order</span>
          {orderDropdown ? <DownArrowIcon className="ml-auto" /> : <RightArrowIcon className="ml-auto" />}
        </div>

        {orderDropdown && (
          <div className="flex flex-col space-y-2 ml-4">
            <NavLink
              to="/NewOrder"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              New Order
            </NavLink>
            <NavLink
              to="/OrderHistory"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Order History
            </NavLink>
            <NavLink
              to="/TrackOrder"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Track Order
            </NavLink>
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={toggleHotOfferDropdown}
        >
          <TagIcon />
          {/* <FaTags className="text-lg" /> */}
          <span className="w-24">Hot Offer</span>
          {hotOfferDropdown ? <DownArrowIcon className="ml-auto" /> : <RightArrowIcon className="ml-auto" />}
        </div>

        {hotOfferDropdown && (
          <div className="flex flex-col space-y-2 ml-4">
            <NavLink
              to="/InsertOffer"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Insert Offer
            </NavLink>
            <NavLink
              to="/ViewOffer"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              View Offer
            </NavLink>
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={toggleBrandsDropdown}
        >
          {/* <FaUsers className="text-lg" /> */}
          <BrandsIcon />
          <span className="w-24">Brands</span>
          {brandsDropdown ? <DownArrowIcon className="ml-auto" /> : <RightArrowIcon className="ml-auto" />}
        </div>

        {brandsDropdown && (
          <div className="flex flex-col space-y-2 ml-4">
            <NavLink
              to="/Brand"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Brands
            </NavLink>
            <NavLink
              to="/BrandList"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              Brands List
            </NavLink>
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={toggleCustomerDropdown}
        >
          {/* <FaUsers className="text-lg" /> */}
          <UsersIcon />
          <span className="w-24">Customer</span>
          {customerDropdown ? <DownArrowIcon className="ml-auto" /> : <RightArrowIcon className="ml-auto" />}
        </div>

        {customerDropdown && (
          <div className="flex flex-col space-y-2 ml-4">
            <NavLink
              to="/User"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              User
            </NavLink>
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 "
          onClick={togglePaymentDropdown}
        >
          {/* <FaCreditCard className="text-lg" /> */}
          <DebitCardIcon />
          <span className="w-24">Payment</span>
          {paymentDropdown ? <DownArrowIcon className="ml-auto" /> : <RightArrowIcon className="ml-auto" />}
        </div>

        {paymentDropdown && (
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 p-2 rounded"
                  : "hover:text-blue-600 transition-colors p-2"
              }
            >
              All Payment
            </NavLink>
          </div>
        )}

        <div
          className="flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          onClick={handleLogout}
        >
          {/* <FaSignOutAlt className="text-lg" /> */}
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
