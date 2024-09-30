import { useState } from "react";
import Layout from "../../Components/Layout";
import { MdEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IoGift } from "react-icons/io5";
import "./style.css";

const Customer = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    CustomerName,
    ID,
    Phone,
    JoiningDate,
    LastSeen,
    Order,
    Action
  ) {
    return { CustomerName, ID, Phone, JoiningDate, LastSeen, Order, Action };
  }

  const rows = [
    createData(
      "Emily Arnold",
      "G532345676",
      "9876543345",
      "10/10/2023",
      "2 minutes ago",
      "₹100",
      "View More"
    ),
    createData(
      "Emily Arnold",
      "G532345676",
      "9876543345",
      "10/10/2023",
      "2 minutes ago",
      "₹100",
      "View More"
    ),
    createData(
      "Emily Arnold",
      "G532345676",
      "9876543345",
      "10/10/2023",
      "2 minutes ago",
      "₹100",
      "View More"
    ),
    createData(
      "Emily Arnold",
      "G532345676",
      "9876543345",
      "10/10/2023",
      "2 minutes ago",
      "₹100",
      "View More"
    ),
    createData(
      "Emily Arnold",
      "G532345676",
      "9876543345",
      "10/10/2023",
      "2 minutes ago",
      "₹100",
      "View More"
    ),
  ];

  return (
    <Layout>
      <div className="customer_container">
        <h3>Customer List</h3>
        <p>Here are your total customer</p>
      </div>
      <TableContainer style={{paddingLeft:"10px"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">ID</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Joining Date</StyledTableCell>
              <StyledTableCell align="right">Last Seen</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="right">
                  {row.CustomerName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.ID}</StyledTableCell>
                <StyledTableCell align="right">{row.Phone}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.JoiningDate}
                </StyledTableCell>
                <StyledTableCell align="right">{row.LastSeen}</StyledTableCell>
                <StyledTableCell align="right">
                  {order ? <IoGift style={{cursor:"pointer" , fontSize:"18px" , color:"goldenrod"}}/> : "----"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div style={{display:"flex" , alignItems:"center" , align:"right" ,  gap:"10px" , cursor:"pointer"}}>
                  <MdOutlineRemoveRedEye
                    onClick={() => navigate("/customerDetails")}
                  />
                 View More
                 </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Customer;
