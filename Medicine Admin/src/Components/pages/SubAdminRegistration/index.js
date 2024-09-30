import { useState } from "react";
import FormPopUp from "../../FormPopUp";
import InputField from "../../library/InputField";
import "./style.css";
import Button from "../../library/Button";

const SubAdminRegistration = () => {

    const [permissions , setPermissions] = useState([
        "Use User Management: Ability to create, edit, and delete user accounts. This might include managing user roles and permissions.",
        "Content Moderation: Access to review and moderate content submitted by users, including the ability to approve, reject, or edit posts.",
        "Settings Configuration: Ability to modify system or application settings.",
        "Reporting and Analytics: Access to view and generate reports or analytics related to system usage, user activity, or performance metrics.",
        "Support and Troubleshooting: Capability to assist with user support requests, resolve common issues."
    ])
  return (
    <>
      <div className="sub_admin_fields" >
        <div className="sub_admin_block"> 
        <div>First Name</div>
        <InputField style={{ width: "13vw" }} />
        </div>
        <div className="sub_admin_block"> 
        <div>Last Name</div>
        <InputField style={{ width: "13vw" }} />
        </div>
      </div>
      <div className="sub_admin_fields">
      <div className="sub_admin_block"> 
      <div>Email Address</div>
      <InputField style={{ width: "13vw" }}/>
      </div>
      <div className="sub_admin_block"> 
      <div>Phone No</div>
      <InputField style={{ width: "13vw" }}/>
      </div>
      </div>
      <div className="sub_admin_block"> 
      <div>Address Line 1</div>
      </div>
      <InputField style={{width:"30vw", marginBottom:"10px"}}/>
      <div className="sub_admin">Date Of Birth</div>
      <div className="sub_admin_fields">
      <InputField style={{ width: "8vw" }}/>
      <InputField style={{ width: "8vw" }}/>
      <InputField style={{ width: "8vw" }}/>
      </div>
      <div className="sub_admin_fields">
      <div className="sub_admin_block">
      <div >Commission</div>
      <InputField style={{ width: "13vw" }}/>
      </div>
      <div className="sub_admin_block">
      <div>Password</div>
      <InputField style={{ width: "13vw" }}/>
      </div>
      </div>
      <div className="sub_admin">Confirm Password</div>
      <InputField style={{ width: "13vw" }}/>

        <p className="sub_admin_permission_heading"> Permission To Sub-Admin</p>
        {
            permissions?.map((permission)=>{
                return <div className="sub_admin_permission">
                    <InputField type="checkbox" style={{height:"20px",width:"20px", cursor:"pointer"
                    }}/>
                        
                    {permission}</div>
            })
        }
        <Button text="Register" style={{width:"28vw" , marginTop:"20px"}}/>
    </>
  );
};

export default SubAdminRegistration;
