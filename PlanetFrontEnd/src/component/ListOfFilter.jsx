import { Button, Form, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { TbToggleRightFilled } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProductsByFilters,
  getProductByFilterPrice,
} from "../features/product/productSlice";

const ListOfFilter = ({ category }) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    category: category,
    subCategory: "",
    brand: "",
    size: "",
  });

  const [filterPrice, setFilterPrice] = useState({
    category: category,
    minPrice: "",
    maxPrice: "",
  });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilterPrice((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFilters({
      category,
      subCategory: "",
      brand: "",
      size: "",
    });
  }, [category]);

  useEffect(() => {
    dispatch(fetchProductsByFilters(filters));
  }, [filters, dispatch]);

  // const handleCheckboxChange = (e) => {
  //   const { id, checked, name } = e.target;
  //   setFilters((prevFilters) => {
  //     const newFilterValue = checked
  //       ? [...prevFilters[name], id]
  //       : prevFilters[name].filter((item) => item !== id);

  //     return {
  //       ...prevFilters,
  //       [name]: newFilterValue,
  //     };
  //   });
  // };

  // const handleCheckboxChange = (e) => {
  //   const { name, id } = e.target;
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: prevFilters[name] === id ? "" : id,
  //   }));
  // };

  // const handleCheckboxChange = (e) => {
  //   const { name, id } = e.target;

  //   if (name === "category") {
  //     // Logic to handle category change
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       subCategory: id === "men" ? "" : prevFilters.subCategory,
  //       brand: id === "men" ? "" : prevFilters.brand,
  //       size: id === "men" ? "" : prevFilters.size,
  //     }));
  //   } else {
  //     // Logic to handle subCategory, brand, and size change
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       [name]: prevFilters[name] === id ? "" : id,
  //     }));
  //   }
  // };

  const handleCheckboxChange = (e) => {
    const { name, id, checked } = e.target;

    setFilters((prevFilters) => {
      if (name === "category" && id === "all") {
        // Reset other filters when "All" is clicked
        return {
          category: prevFilters.category,
          subCategory: "",
          brand: "",
          size: "",
        };
      }

      if (name === "subCategory") {
        return {
          ...prevFilters,
          subCategory: checked ? id : "",
          brand: checked ? prevFilters.brand : "",
          size: checked ? prevFilters.size : "",
        };
      }

      return {
        ...prevFilters,
        [name]: checked ? id : "",
      };
    });
  };

  return (
    <div>
      <Form style={{ marginLeft: 20 }}>
        <h6>CATEGORIES</h6>
        <div
          className="form-check"
          style={{ width: "250px", marginBottom: 10 }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            id="all"
            name="category"
            style={{ width: 25, height: 23, border: "1px solid #589ded" }}
            onChange={handleCheckboxChange}
            checked={
              filters.subCategory === "" &&
              filters.brand === "" &&
              filters.size === ""
            }
          />
          <label
            className="form-check-label"
            htmlFor="all"
            style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
          >
            All
          </label>
        </div>

        {["Jeans", "TShirt", "Shirt"].map((item) => (
          <div
            className="form-check"
            style={{ width: "250px", marginBottom: 10 }}
            key={item}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={item}
              name="subCategory"
              style={{ width: 25, height: 23, border: "1px solid #589ded" }}
              onChange={handleCheckboxChange}
              checked={filters.subCategory === item}
            />
            <label
              className="form-check-label"
              htmlFor={item}
              style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </label>
          </div>
        ))}

        <h6 style={{ marginTop: 20, marginBottom: 10 }}>BRAND</h6>
        {["zara", "mufti", "adidas", "sparky", "puma"].map((brand) => (
          <div
            className="form-check"
            style={{ width: "250px", marginBottom: 10 }}
            key={brand}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={brand}
              name="brand"
              style={{ width: 25, height: 23, border: "1px solid #589ded" }}
              onChange={handleCheckboxChange}
              checked={filters.brand === brand}
            />
            <label
              className="form-check-label"
              htmlFor={brand}
              style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
            >
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </label>
          </div>
        ))}

        <h6 style={{ marginTop: 20, marginBottom: 10 }}>SIZE</h6>
        {["xs", "s", "m", "L", "xl"].map((size) => (
          <div
            className="form-check"
            style={{ width: "250px", marginBottom: 10 }}
            key={size}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id={size}
              name="size"
              style={{ width: 25, height: 23, border: "1px solid #589ded" }}
              onChange={handleCheckboxChange}
              checked={filters.size === size}
            />
            <label
              className="form-check-label"
              htmlFor={size}
              style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
            >
              {size.toUpperCase()}
            </label>
          </div>
        ))}

        <h6 style={{ marginTop: 20, marginBottom: 20 }}>Price</h6>
        <div className="d-flex">
          <input
            type="text"
            className="price-input"
            style={{ width: 82, height: 39 }}
            placeholder="₹From"
            name="minPrice"
            value={filterPrice.minPrice}
            onChange={handlePriceChange}
          />
          <input
            type="text"
            className="price-input"
            style={{ width: 82, height: 39, marginLeft: 20 }}
            name="maxPrice"
            placeholder="To"
            value={filterPrice.maxPrice}
            onChange={handlePriceChange}
          />
        </div>
        <Button
          style={{
            marginTop: 20,
            width: "100%",
            background: "#AB68EF",
            border: "none",
            marginBottom: 20,
          }}
          onClick={() => {
            dispatch(getProductByFilterPrice(filterPrice));
            setFilterPrice({ minPrice: "", maxPrice: "" });
          }}
        >
          Apply filter
        </Button>
      </Form>
    </div>

    // <div>
    //   <Form style={{ marginLeft: 20 }}>
    //     <h6>CATEGORIES</h6>
    //     {["all", "Jeans", "tshirts", "shirts"].map((item) => (
    //       <div
    //         className="form-check"
    //         style={{ width: "250px", marginBottom: 10 }}
    //         key={item}
    //       >
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           id={item}
    //           name="subCategory"
    //           style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //           onChange={handleCheckboxChange}
    //         />
    //         <label
    //           className="form-check-label"
    //           htmlFor={item}
    //           style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //         >
    //           {item.charAt(0).toUpperCase() + item.slice(1)}
    //         </label>
    //       </div>
    //     ))}

    //     {/* BRANDS */}
    //     <h6 style={{ marginTop: 20, marginBottom: 10 }}>BRAND</h6>
    //     {["zara", "mufti", "adidas", "sparky", "puma"].map((brand) => (
    //       <div
    //         className="form-check"
    //         style={{ width: "250px", marginBottom: 10 }}
    //         key={brand}
    //       >
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           id={brand}
    //           name="brand"
    //           style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //           onChange={handleCheckboxChange}
    //         />
    //         <label
    //           className="form-check-label"
    //           htmlFor={brand}
    //           style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //         >
    //           {brand.charAt(0).toUpperCase() + brand.slice(1)}
    //         </label>
    //       </div>
    //     ))}

    //     {/* SIZES */}
    //     <h6 style={{ marginTop: 20, marginBottom: 10 }}>SIZE</h6>
    //     {["xs", "s", "m", "l", "xl"].map((size) => (
    //       <div
    //         className="form-check"
    //         style={{ width: "250px", marginBottom: 10 }}
    //         key={size}
    //       >
    //         <input
    //           className="form-check-input"
    //           type="checkbox"
    //           id={size}
    //           name="size"
    //           style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //           onChange={handleCheckboxChange}
    //         />
    //         <label
    //           className="form-check-label"
    //           htmlFor={size}
    //           style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //         >
    //           {size.toUpperCase()}
    //         </label>
    //       </div>
    //     ))}
    //   </Form>
    // </div>

    // <div>
    //   <Form style={{ marginLeft: 20 }}>

    //     <h6>CATEGORIES</h6>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="all"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //         onChange={handleCheckboxChange}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="all"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         All
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="jeans"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //         onChange={handleCheckboxChange}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="jeans"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //         onChange={handleCheckboxChange}
    //       >
    //         Jeans
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="tshirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="tshirts"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         T-Shirts
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 15,
    //           fontWeight: "400",
    //         }}
    //       >
    //         Shirts
    //       </label>
    //     </div>

    //     {/* BRANDS */}

    //     <h6 style={{ marginTop: 20, marginBottom: 10 }}>BRAND</h6>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="all"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="all"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         Zara
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="jeans"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="jeans"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         Mufti
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="tshirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="tshirts"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         Adidas
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 15,
    //           fontWeight: "400",
    //         }}
    //       >
    //         sparky
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{
    //           width: 25,
    //           height: 23,
    //           border: "1px solid #589ded",
    //           marginTop: 10,
    //         }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 15,
    //           fontWeight: "400",
    //         }}
    //       >
    //         puma
    //       </label>
    //     </div>

    //     {/* sizes */}
    //     <h6 style={{ marginTop: 20, marginBottom: 10 }}>SIZE</h6>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="all"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="all"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         X-Small
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="jeans"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="jeans"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         Small
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="tshirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="tshirts"
    //         style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
    //       >
    //         Medium
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 15,
    //           fontWeight: "400",
    //         }}
    //       >
    //         Large
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{
    //           width: 25,
    //           height: 23,
    //           border: "1px solid #589ded",
    //           marginTop: 10,
    //         }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 15,
    //           fontWeight: "400",
    //         }}
    //       >
    //         X-Large
    //       </label>
    //     </div>

    //     {/* delevery options */}
    //     <h6 style={{ marginTop: 20, marginBottom: 15 }}>Delivery Options</h6>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="delivery"
    //         id="same-day"
    //         style={{ padding: 10, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="same-day"
    //         style={{ marginLeft: 12 }}
    //       >
    //         Same Day
    //       </label>
    //     </div>
    //     <div
    //       className="form-check"
    //       style={{ width: "250px", marginBottom: 10 }}
    //     >
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="delivery"
    //         id="next-day"
    //         style={{ padding: 10, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="next-day"
    //         style={{ marginLeft: 12 }}
    //       >
    //         Next Day
    //       </label>
    //     </div>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         name="delivery"
    //         id="business-days"
    //         style={{ padding: 10, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="business-days"
    //         style={{ marginLeft: 12 }}
    //       >
    //         2-5 Business Days
    //       </label>
    //     </div>
    //     {/* in stock and off stock */}
    //     <h6 style={{ marginTop: 20, marginBottom: 20 }}>Inventory</h6>
    //     <ToggleButtonGroup type="radio" name="inventory" defaultValue={1}>
    //       <ToggleButton
    //         style={{
    //           background: "#FFFFFF",
    //           color: "#000000",
    //           border: "none",
    //           boxShadow: "2px 2px 2px #888888",
    //         }}
    //         id="tbg-radio-1"
    //         value={1}
    //       >
    //         <TbToggleRightFilled size={35} style={{ color: "#589ded" }} /> Only
    //         in Stock
    //       </ToggleButton>
    //     </ToggleButtonGroup>
    //     {/* ratings */}
    //     <h6 style={{ marginTop: 20, marginBottom: 20 }}>Ratings</h6>
    //     <div className="form-check" style={{ width: "250px" }}>
    //       <input
    //         className="form-check-input"
    //         type="checkbox"
    //         id="shirts"
    //         style={{ width: 25, height: 23, border: "1px solid #589ded" }}
    //       />
    //       <label
    //         className="form-check-label"
    //         htmlFor="shirts"
    //         style={{
    //           marginLeft: 12,
    //           fontSize: 19,
    //           fontWeight: "400",
    //         }}
    //       >
    //         {" "}
    //         <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
    //       </label>
    //     </div>
    //     {/* price */}

    //     <h6 style={{ marginTop: 20, marginBottom: 20 }}>Price</h6>
    //     <div className="d-flex">
    //       <input
    //         type="number"
    //         style={{ width: 82, height: 39 }}
    //         placeholder="$0"
    //       />
    //       <input
    //         type="number"
    //         style={{ width: 82, height: 39, marginLeft: 20 }}
    //         placeholder="To"
    //       />
    //     </div>
    //   </Form>
    //   {/* color options */}
    //   <h6 style={{ marginTop: 20, marginBottom: 20, marginLeft: 20 }}>
    //     Color Options
    //   </h6>
    //   <div className="color-options" style={{ marginLeft: 20 }}>
    //     <div className="color-box" style={{ backgroundColor: "#000" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#fff" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#fa0f7d" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#00ff00" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#00ff00" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#0ff2fa" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#db0fc7" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#0fc0db" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#961206" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#429606" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#f542ce" }}></div>
    //     <div className="color-box" style={{ backgroundColor: "#42e6f5" }}></div>
    //     {/* Add more color options as needed */}
    //   </div>
    // </div>
  );
};

export default ListOfFilter;
