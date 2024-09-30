import "./style.css";
import { RxDoubleArrowRight } from "react-icons/rx";
// import { MdOutlineMedicalServices } from "react-icons/md";

const DashboardCard=({heading , price , difference})=>{
    return(
        <div >
        <div className="dashboard_container">   
            <h3>{heading}</h3>
            <p>{price}</p>  
            <p className="dashboard_difference">{difference}</p>     
            </div>
        </div>
    );
};

export default DashboardCard;