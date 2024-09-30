import Layout from "../../Components/Layout";
import Button from "../../Components/library/Button";
import InputField from "../../Components/library/InputField";
import "./style.css";

const AddCategory = () => {
  return (
    <Layout>
      <h2 className="add_category_heading">Add Category</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="add_category_container">
          <div className="add_brand_div">
            <label>Add Category</label>
            <InputField heading="" />
          </div>
          <div className="add_brand_div">
            <label>Upload Image</label>
            <InputField
              heading=""
              text="+"
              type="file"
              style={{
                width: "20vw",
                height: "30vh",
                // backgroundColor: "lightgrey",
              }}
            />
          </div>
          <Button text="Save Category" />
        </div>
      </div>
    </Layout>
  );
};

export default AddCategory;
