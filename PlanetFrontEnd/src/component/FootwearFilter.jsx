import { Button, Form } from "react-bootstrap";
import { getProductByFilterPrice } from "../features/product/productSlice";
import { useDispatch } from "react-redux";

const FootwearFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
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
            />
            <label
              className="form-check-label"
              htmlFor="all"
              style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
            >
              All
            </label>
          </div>

          {["Casual Shoes", "Sports Shoes", "Formal Shoes", "Boots"].map(
            (item) => (
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
                />
                <label
                  className="form-check-label"
                  htmlFor={item}
                  style={{ marginLeft: 12, fontSize: 15, fontWeight: "400" }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              </div>
            )
          )}

          <h6 style={{ marginTop: 20, marginBottom: 10 }}>BRAND</h6>
          {[
            "Puma",
            "FAUSTO",
            "Campus",
            "Sparx",
            "Roadster",
            "Bxxy",
            "ADIDAS",
            "ASIAN",
          ].map((brand) => (
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

          <div>
            <h6 style={{ marginTop: 20, marginBottom: 20 }}>Price</h6>
            <div style={{ display: "flex" }}>
              <input
               style={{ width: 82, height: 39,}}
                type="text"
                placeholder="₹From"
              />
              <input style={{ width: 82, height: 39, marginLeft: 20 }} type="text" placeholder="₹To" />
            </div>
          </div>
          <Button
          style={{ marginTop: 20, width: "100%",marginBottom:20 }}
          onClick={() => {
            dispatch(getProductByFilterPrice());
          }}
        >
          Apply filter
        </Button>
        </Form>
      </div>
    </div>
  );
};

export default FootwearFilter;
