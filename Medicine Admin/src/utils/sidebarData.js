import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { PiUserPlusFill } from "react-icons/pi";

const SidebarData = [
  {
    label: "Dashboard",
    icon: <MdDashboard/>,
    link:"/dashboard",
  },
  {
    label: "Customer",
    icon: <FaUsers/>,
    options:[
        {
            label:"Customer List",
            link:"/customer",

        }
    ]
  },
  {
    label: "Medicine",
    icon: <GiMedicines/>,
   
    options:[
      {
        label: "Add Category",
        link:"/addCategory",
      },
      {
        label:"Add Sub Category",
        link:"/addSubCategory",
      },
      {
        label:"Add Brand",
        link:"/addBrand",

      }, 
      {
        label:"Add Medicine",
        link:"/addMedicine",
    },
    {
        label:"Medicine List",
        link:"/medicine",
    },
]

  },
  {
    label:"Order",
    icon:<FaTruckFast/>,
    // link:"/order",
    options:[
        {
            label:"New Order",
            link:"/newOrder",
        },
        {
            label:"Order History",
            link:"/orderhistory",
        },
    ]

  },
  {
    label:"Sub-Admin",
    icon :<PiUserPlusFill/>,
    link:"/subAdmin",
  }
    
]

export default SidebarData;
