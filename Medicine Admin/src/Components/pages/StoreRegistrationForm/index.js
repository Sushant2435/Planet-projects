import { useState } from "react";
import Button from "../../library/Button";
import InputField from "../../library/InputField";
import "./style.css";

const StoreRegistrationForm=()=>{

    const [permissions , setPermissions] = useState([
        "Use User Management: Ability to create, edit, and delete user accounts. This might include managing user roles and permissions.",
        "Content Moderation: Access to review and moderate content submitted by users, including the ability to approve, reject, or edit posts.",
        "Settings Configuration: Ability to modify system or application settings.",
        "Reporting and Analytics: Access to view and generate reports or analytics related to system usage, user activity, or performance metrics.",
        "Support and Troubleshooting: Capability to assist with user support requests, resolve common issues."
    ])
    return(
        <div>
            <div className="store_register_field">
            <div className="store_register">
            <label>Store Name</label>
            <InputField style={{width:"28vw"}}/>
            </div>
            </div>
            <div className="store_register_field">
            <div className="store_register">
            <label>Email Address</label>
            <InputField style={{width:"13vw"}}/>
            </div>
            <div className="store_register">
            <label>Phone Number</label>
            <InputField style={{width:"13vw"}}/>
            </div>
            </div>
            <label className="store_register_name">Address line 1</label>
            <InputField style={{width:"29vw", marginBottom:"10px"}}/>
            <div className="store_register_field">
            <div className="store_register">
            <label>Date Of Birth</label>
            <InputField style={{width:"13vw"}}/>
            </div>
            <div  className="store_register">
            <label>Commission</label>
            <InputField style={{width:"13vw"}}/>
            <div>
            </div>
                </div>
                </div>
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

        </div>
    )
}

export default StoreRegistrationForm;