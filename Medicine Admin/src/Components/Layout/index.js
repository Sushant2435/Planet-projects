import { useNavigate } from "react-router-dom";
import "./style.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout =({children})=>{
    const navigate = useNavigate();
//   useEffect(() => {
//     async function getLoginHeader() {
//       const loginHeader = await localStorage.getItem(
//         StorageConstant.LOGIN_HEADER
//       );
//       if (!loginHeader) {
//         navigate("/login", { replace: true });
//       }
//     }
//     getLoginHeader();
//   }, []);
  return (
    <div className="layout_row">
      <Sidebar />
      <div className="layout_nav">
        <Navbar />
        <div className="layout_childrens">{children}</div>
      </div>
    </div>
  );
}

export default Layout;