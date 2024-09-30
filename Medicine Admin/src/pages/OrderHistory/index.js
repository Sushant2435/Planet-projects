import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Layout from "../../Components/Layout";
import { MdDelete } from "react-icons/md";
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(OrderId, Username, Date, Type, Status, Total, Action) {
  return { OrderId, Username, Date, Type, Status, Total, Action };
}

const rows = [
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "delivery",
    "₹700"
  ),
];

const rows2 = [
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "cancelled",
    "₹700"
  ),
];

const rows1 = [
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
  createData(
    "#JH2033",
    "Emily Arnold",
    "12/06/2022",
    "delivery",
    "Completed",
    "₹700"
  ),
];

const OrderHistory = () => {
  const [selection, setSelection] = React.useState("All Orders");

  const handleComplete = () => {
    setSelection("Completed");
  };

  const handleCancelled = () => {
    setSelection("Cancelled");
  };

  return (
    <Layout>
      <h3 style={{ paddingLeft: "10px" }}>Order History</h3>
      <p style={{ paddingLeft: "10px", marginBottom: "10px" }}>
        You have total 60 orders
      </p>
      <div className="order_history">
        <span onClick={() => setSelection("All Orders")}
          className={selection==="All Orders" ? "active" : ""}
          >All Orders</span>
        <span onClick={handleComplete}
        className={selection==="Completed" ? "active" : ""}
        >Completed</span>
        <span onClick={handleCancelled}
        className={selection==="Cancelled" ? "active" : ""}
        >Cancelled</span>
      </div>
      {selection === "All Orders" ? (
        <TableContainer style={{ paddingLeft: "10px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">OrderId</StyledTableCell>
                <StyledTableCell align="right">Username</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="right">{row.OrderId}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row.Status}</StyledTableCell>
                  <StyledTableCell align="right">{row.Total}</StyledTableCell>
                  <StyledTableCell align="right">
                    <MdDelete style={{ cursor: "pointer" }} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : selection === "Completed" ? (
        <TableContainer style={{ paddingLeft: "10px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">OrderId</StyledTableCell>
                <StyledTableCell align="right">Username</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row1) => (
                <StyledTableRow key={row1.name}>
                  <StyledTableCell align="right">
                    {row1.OrderId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row1.Username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row1.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row1.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row1.Status}</StyledTableCell>
                  <StyledTableCell align="right">{row1.Total}</StyledTableCell>
                  <StyledTableCell align="right">
                    <MdDelete style={{ cursor: "pointer" }} />
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
                <StyledTableCell align="right">OrderId</StyledTableCell>
                <StyledTableCell align="right">Username</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Type</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows2.map((row2) => (
                <StyledTableRow key={row2.name}>
                  <StyledTableCell align="right">
                    {row2.OrderId}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row2.Username}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row2.Date}</StyledTableCell>
                  <StyledTableCell align="right">{row2.Type}</StyledTableCell>
                  <StyledTableCell align="right">{row2.Status}</StyledTableCell>
                  <StyledTableCell align="right">{row2.Total}</StyledTableCell>
                  <StyledTableCell align="right">
                    <MdDelete style={{ cursor: "pointer" }} />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Layout>
  );
};

export default OrderHistory;
