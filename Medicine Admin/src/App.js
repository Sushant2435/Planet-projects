import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Medicine from "./pages/Medicine";
import Customer from "./pages/Customer";
import AddMedicine from "./pages/AddMedicine";
import AddBrand from "./pages/AddBrand";
import AddCategory from "./pages/AddCategory";
import AddSubCategory from "./pages/AddSubCategory";
import SubAdmin from "./pages/SubAdmin";
import Order from "./pages/NewOrder";
import CustomerDetails from "./pages/CustomerDetails";
import OrderHistory from "./pages/OrderHistory";
import MedicineDetails from "./Components/pages/MedicineDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/medicine" element={<Medicine/>}/>
      <Route path="/customer" element={<Customer/>}/>
      <Route path="/addMedicine" element={<AddMedicine/>}/>
      <Route path="/addBrand" element={<AddBrand/>}/>
      <Route path="/addCategory" element={<AddCategory/>}/>
      <Route path="/addSubCategory" element={<AddSubCategory/>}/>
      <Route path="/subAdmin" element={<SubAdmin/>}/>
      <Route path="/newOrder" element={<Order/>}/>
      <Route path="/orderHistory" element={<OrderHistory/>}/>
      <Route path="customerDetails" element={<CustomerDetails/>}/>
      <Route path="/medicineDetails" element={<MedicineDetails/>}/>
    </Routes>
    </BrowserRouter>
      );
}

export default App;
