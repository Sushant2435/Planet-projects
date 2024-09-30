import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "./style.css";


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

  function createData(OrderId, Username, Date, Total, Address, Action) {
    return {OrderId, Username, Date, Total, Address, Action};
  }
  
  const rows = [
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" ),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" ),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" ),
    createData("Emily Arnold", "Paracetamol", "500 mg", "Tablet", "₹50.00", "₹100" ),
  ];
  

const OrderList=()=>{

  const [userOrders , setUserOrders]= React.useState();

  const handleOrders=()=>{
    setUserOrders();
  }
    return (
        <>
          <div className="customer_container">
            <h3>Order List</h3>
            <p style={{marginBottom:"10px"}}>Here is the order list</p>
          </div>
        <TableContainer style={{paddingLeft:"10px"}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">OrderId</StyledTableCell>
                <StyledTableCell align="right">Username</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.OrderId}</StyledTableCell>
                  <StyledTableCell align="right">{row.Username}</StyledTableCell>
                  <StyledTableCell align="right">{row.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row.Total}</StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell align="right" >
                    <div style={{display:"flex" , justifyContent:"center" , gap:"10px" , cursor:"pointer" }}>
                    <MdOutlineRemoveRedEye onClick={handleOrders}/>
                    <FiEdit />
                    <RiDeleteBin6Line />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        </>
      );
}


export default OrderList;