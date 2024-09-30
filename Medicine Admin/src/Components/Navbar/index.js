import { useRef, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import "./style.css";

const Navbar = () => {
  // const [popOpen, setPopOpen] = useState(false);
  // const myRef = useRef();

  // useEffect(() => {
  //   if (popOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () =>
  //       document.removeEventListener("mousedown", handleClickOutside);
  //   }
  // }, [popOpen]);

  return (
    <>
    <div className="navbar__container">
      <div className="navbar_contents">
        <input
          className="navbar_search"
          type="search"
          placeholder="Search for anything here..."
        />
        {/* <IoSearch/> */}
        <div className="navbar">
          <FaUserLarge />
          <div className="navbar_profile">
            <p className="navbar_text">Admin Name</p>
            <p className="navbar_text">Hello Admin!</p>
          </div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
