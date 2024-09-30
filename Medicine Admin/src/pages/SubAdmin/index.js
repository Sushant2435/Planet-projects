import Layout from "../../Components/Layout";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./style.css";
import Button from "../../Components/library/Button";
import AlertPopUp from "../../Components/AlertPopUp";
import SubAdminRegistration from "../../Components/pages/SubAdminRegistration";
import FormPopUp from "../../Components/FormPopUp";
import StoreRegistrationForm from "../../Components/pages/StoreRegistrationForm";

const SubAdmin = () => {
  const [selection, setSelection] = React.useState("Sub-Admin");
  // const [active , setActive] = React.useState()
  const [openSubForm , setOpenSubForm] = React.useState(false);
  const [openStoreForm , setOpenStoreForm] = React.useState(false);

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

  function createData(Name, Email, PhoneNumber, Address, Action) {
    return { Name, Email, PhoneNumber, Address, Action };
  }

  function createData1(Name, StoreId, PhoneNumber,StoreName, Address,Status, Action) {
    return { Name, StoreId, PhoneNumber,StoreName, Address,Status, Action };
  }

  const handleStore =()=>{
    setSelection(!selection)
  }

  const handleSubAdminForm=()=>{
    setOpenSubForm(true);
  }

  const handleSubAdminFormClose=()=>{
    setOpenSubForm(false);
  }

  const handleStoreForm =()=>{
    setOpenStoreForm(true);
  }

  const handleStoreFormClose=()=>{
    setOpenStoreForm(false);
  }

  const rows = [
    createData(
      "Emily Arnold",
      "sara.cruz@example.com",
      "+91 815 150-60-61",
      "2464 Royal Ln. Mesa, New Jersey 45463"
    ),
    createData(
      "Emily Arnold",
      "sara.cruz@example.com",
      "+91 815 150-60-61",
      "2464 Royal Ln. Mesa, New Jersey 45463"
    ),
    createData(
      "Emily Arnold",
      "sara.cruz@example.com",
      "+91 815 150-60-61",
      "2464 Royal Ln. Mesa, New Jersey 45463"
    ),
    createData(
      "Emily Arnold",
      "sara.cruz@example.com",
      "+91 815 150-60-61",
      "2464 Royal Ln. Mesa, New Jersey 45463"
    ),
    createData(
      "Emily Arnold",
      "sara.cruz@example.com",
      "+91 815 150-60-61",
      "2464 Royal Ln. Mesa, New Jersey 45463"
    ),
  ];

  const rows1 = [
    createData1(
      "Mitchell",
      "G0002",
      "+91 815 150-60-61",
      "Ranch Market",
      "2464 Royal Ln. Mesa, New Jersey 45463",
      "Available"
    ),
    createData1(
      "Mitchell",
      "G0002",
      "+91 815 150-60-61",
      "Ranch Market",
      "2464 Royal Ln. Mesa, New Jersey 45463",
      "Available"
    ),
    createData1(
      "Mitchell",
      "G0002",
      "+91 815 150-60-61",
      "Ranch Market",
      "2464 Royal Ln. Mesa, New Jersey 45463",
      "Available"
    ),
    createData1(
      "Mitchell",
      "G0002",
      "+91 815 150-60-61",
      "Ranch Market",
      "2464 Royal Ln. Mesa, New Jersey 45463",
      "Available"
    ),
  ];

  
  return (
    
    <Layout>
      <div className="sub_admin_container">
        <div>
          <h3>Sub-Admin List</h3>
          <p style={{ marginBottom: "10px" }}>Here is the sub-admin list</p>
         <div className="sub_admin_store">
            <span onClick={()=>setSelection("Sub-Admin")}
              className={selection==="Sub-Admin" ? "active" : ""}
              >Sub-Admin</span>
            <span onClick={handleStore}
            className={selection!=="Sub-Admin" ? "active" : ""}
            >Add Store</span>
          </div>
        </div>
        {selection==="Sub-Admin" ? (
          <Button text="Add Sub-Admin" onClick={handleSubAdminForm} />
        ) : (
          <Button text="Add Store" onClick={handleStoreForm}/>
        )}
      </div>
      {selection==="Sub-Admin" ? (
        <TableContainer style={{ paddingLeft: "10px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.Name}</StyledTableCell>
                  <StyledTableCell align="right">{row.Email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.PhoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Address}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      style={{ display: "flex", gap: "5px", cursor: "pointer" }}
                    >
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
      ) : (
        <TableContainer style={{ paddingLeft: "10px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Store Id</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Store Name</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row1) => (
                <StyledTableRow key={row1.name}>
                  <StyledTableCell align="right">{row1.Name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row1.StoreId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row1.PhoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row1.StoreName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row1.Address}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row1.Status}</StyledTableCell>

                  <StyledTableCell align="right">
                    <div
                      style={{ display: "flex", gap: "5px", cursor: "pointer" }}
                    >
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
      )}
      <FormPopUp
      open={openSubForm}
      handleClose={handleSubAdminFormClose}
      header="Sub-Admin Registration"
      description="Register Sub-Admin Now"
     >
      <SubAdminRegistration/>
     </FormPopUp>
      
      <FormPopUp
      open={openStoreForm}
      handleClose={handleStoreFormClose}
      header="Store Registration"
      description="Register Your Store Here!"
      >
        <StoreRegistrationForm/>
      </FormPopUp>

    </Layout>
  );
};

export default SubAdmin;
