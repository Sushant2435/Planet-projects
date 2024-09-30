import Layout from "../../Components/Layout";
import Button from "../../Components/library/Button";
import InputField from "../../Components/library/InputField";
import "./style.css";

const AddBrand = () => {
  return (
    <Layout>
      <h2 className="add_brand_heading">Add Brand</h2>
      <div className="add_brand" style={{ display: "flex", justifyContent: "center" }}>
        <div className="add_brand_container">
          <div className="add_brand_div">
            <label>Add Brand</label>
            <InputField style={{ width: "50vw" }} />
          </div>
          <div className="add_brand_div">
          <label>Upload Image</label>
            <InputField
              text="+"
              type="file"
              style={{
                width: "20vw",
                height: "30vh",
                
              }}
            />
          </div>
          <Button text="Save Brand" />
        </div>
      </div>
    </Layout>
  );
};

export default AddBrand;
