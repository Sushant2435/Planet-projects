import { useState } from "react";
import Layout from "../../Components/Layout";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./style.css";


const MedicineList=()=>{  
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();


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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(Name, GenericName, Weight, Category, Price, Stock,Status, Action) {
    return { Name, GenericName, Weight, Category, Price, Stock,Status, Action};
  }
  
  const rows = [
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" , "Available"),
  ];
  
  return (
    <Layout>
      <div className="customer_container">
        <h3>Medicine List</h3>
        <p>Here is the medicine list</p>
      </div>
    <TableContainer style={{paddingLeft:"10px"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Generic Name</StyledTableCell>
            <StyledTableCell align="right">Weight</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.GenericName}</StyledTableCell>
              <StyledTableCell align="right">{row.Weight}</StyledTableCell>
              <StyledTableCell align="right">{row.Category}</StyledTableCell>
              <StyledTableCell align="right">{row.Price}</StyledTableCell>
              <StyledTableCell align="right">{row.Stock}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">
                <div  style={{display:"flex" , gap:"5px" ,justifyContent:"center" , cursor:"pointer" }}>
              <MdOutlineRemoveRedEye />
              <FiEdit />
              <RiDeleteBin6Line />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
}


export default MedicineList;

