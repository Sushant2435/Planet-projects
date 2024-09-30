import Layout from "../../Components/Layout";
import Button from "../../Components/library/Button";
import InputField from "../../Components/library/InputField";
import TextArea from "../../Components/library/TextArea";
import "./style.css";

const AddMedicine = () => {
  return (
    <Layout>
      <div style={{ paddingLeft: "5vw" }}>
        <h3>Add Medicine</h3>
        <p>You can add medicine by filling up these details</p>
      </div>
      <div className="inventory_container">
        <div className="add_inventory_container">
          <div className="add_inventory">
            <div>
              <p>Medicine Name</p>
              <InputField />
            </div>
            <div>
              <p>Generic Name</p>
              <InputField />
            </div>
            <div>
              <p>Brand</p>
              <InputField />
            </div>
            <div>
              <p>Weight</p>
              <InputField />
            </div>
            <div>
              <p>Category</p>
              <InputField />
            </div>
            <div>
              <p>Sub Category</p>
              <InputField />
            </div>
            <div>
              <p>Price</p>
              <InputField type="number"/>
            </div>
            <div>
              <p>Manufacturer Price</p>
              <InputField type="number"/>
            </div>
            <div>
              <p>Stock(Box)</p>
            <InputField />
            </div>
            <div className="add_medicine_styling">
              <div>
                <p>Upload Images*</p>
                <div className="add_medicine_flex">
                  <div className="add_medicine_img"></div>
                  <input
                    className="add_medicine_add_img"
                    type="file"
                    text="+"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <p>Status</p>
                  <InputField />
                </div>
                <div>
                  <p>Expiry Date</p>
                  <InputField />
                </div>
              </div>
            </div>
            <div>
              <p>Medicine Details</p>
              <TextArea style={{width:"60vw"}} />
            </div>
            {/* <div className="add_medicine_btn"> */}
          <Button text="Save Medicine"/>
        {/* </div> */}
          </div>
        </div>
      
      </div>
    </Layout>
  );
};

export default AddMedicine;
