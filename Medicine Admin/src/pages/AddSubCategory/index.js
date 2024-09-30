import Layout from "../../Components/Layout";
import Button from "../../Components/library/Button";
import InputField from "../../Components/library/InputField";
import "./style.css";

const AddSubCategory =()=>{
    return(
        <Layout>
        <h2 className="add_sub_head">Add Sub-Category</h2>
        <div style={{display:"flex" , justifyContent:"center"}}>
    <div className="add_brand_container">
        <div className="add_brand_div">
            <label>Add Sub-Category</label>
         <InputField heading="" style={{width:"55vw"}}/>
        </div>
        <div className="add_brand_div">
            <label>Upload Image</label>
        <InputField heading="" text="+" type="file" style={{
            width:"20vw", height:"30vh" }}/>
        </div>
        <Button text="Save Sub-Category"/>
    </div>
    </div>

    </Layout>
    )
}


export default AddSubCategory;