import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import SidebarData from "../../utils/sidebarData";
import Button from "../library/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
  let navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div className="sidebar__container">
      <h2 style={{fontFamily:"poppins" , fontSize:"large"}}>Logo</h2>
      <div style={{display:"flex", flexDirection:"column" , justifyItems:"flex-end", height:"70vh"}}>
      <div className="sidebar_content_container">
        {SidebarData.map((sidedata, index) => {
          return (
            <div key={index} className="sidebar__data">
              {sidedata.options ? (
                <SidebarSubmenus sidedata={sidedata} />
              ) : (
                <div
                  className="sidebar_item_row"
                  onClick={() => navigate(`${sidedata.link}`)}
                  style={{
                    // backgroundColor:
                    //   pathName === sidedata.link
                    //     ? "green"
                    //     : "transparent",
                    color: pathName === sidedata.link ? "#4ABF9E" : "none",
                    fontWeight: pathName === sidedata.link ? "bold" : "",
                  }}
                >
                  <p className="sidebar__icon">{sidedata.icon}</p>
                  <p
                    className="sidebar__head"
                    onClick={() => {
                      navigate(`${sidedata.link}`);
                    }}
                  >
                    {sidedata.label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Button
        text="Logout"
        style={{
         display:"flex",
         margin:"auto"
        }}
      />
      </div>
    </div>
  );
};

const SidebarSubmenus = ({ sidedata }) => {
  let navigate = useNavigate();
  const [showSubmenu, setShowSubMenu] = useState(false);
  const pathName = window.location.pathname;
  const [open, setOpen] = useState(false);


  return (
    <>
      <div
        className="sidebar_item_row"
        onClick={() => setShowSubMenu(!showSubmenu)}
        style={{ display: "flex", justifyContent: "space-between" }}
      > 
        <div className="sidebar_content" onClick={() => setOpen(!open)} >
          <p className="sidebar__icon">{sidedata.icon}</p>
          <p className="sidebar__head">{sidedata.label}</p>
          {open ? 
            <MdKeyboardArrowDown className="arrow__icon" />
            :  
            <MdKeyboardArrowRight className="arrow__icon" />
          }
          </div>
       
      </div>

      <div
        className="sidebar__data"
        style={{
          backgroundColor:
            pathName === sidedata.link ? "#4ABF9E" : "transparent",
        }}
      > 
        <p
          className="sidebar__submenu"
          style={{ display: showSubmenu ? "block" : "none" }}
        >
          {sidedata?.options?.map((item) => {
            return (
              <p
                className="sidebar__submenu__item"
                onClick={() => navigate(`${item.link}`)}
                style={{
                  backgroundColor: pathName === sidedata?.options?.link ? "#4ABF9E" : "",
                }}
              >
                {item.label}
              </p>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default Sidebar;
