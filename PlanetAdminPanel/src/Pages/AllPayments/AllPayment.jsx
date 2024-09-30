import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { GetAllPayment } from "../../Service/Allapi";

export const AllPayment = () => {
    const [paymentList, setPaymentList] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await GetAllPayment();
                const data = Array.isArray(result.data.vendorPayOuts) ? result.data.vendorPayOuts : [];
                console.log("Fetched payments:", data);
                setPaymentList(data);
            } catch (error) {
                console.error("Error fetching payment data", error);
            }
        };
        getData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase()); // Convert search query to lowercase
    };

    // Filter paymentList based on the search query (checking multiple fields)
    const filteredPayments = paymentList.filter((payment) => {
        const firstName = payment.userId?.firstName?.toLowerCase() || "";
        const beneficiaryName = payment.beneficiaryName?.toLowerCase() || "";
        const accountNum = payment.accountNum?.toLowerCase() || "";
        const accountIFSC = payment.accountIFSC?.toLowerCase() || "";
        const bankName = payment.bankName?.toLowerCase() || "";
        const payoutsRef = payment.payoutsRef?.toLowerCase() || "";
        const narration = payment.narration?.toLowerCase() || "";
        const amount = String(payment.amount)?.toLowerCase() || ""; // Convert amount to string for comparison

        return (
            firstName.includes(searchQuery) ||
            beneficiaryName.includes(searchQuery) ||
            accountNum.includes(searchQuery) ||
            accountIFSC.includes(searchQuery) ||
            bankName.includes(searchQuery) ||
            payoutsRef.includes(searchQuery) ||
            narration.includes(searchQuery) ||
            amount.includes(searchQuery)
        );
    });

    const firstPage = (currentPage - 1) * itemsPerPage;
    const lastPage = firstPage + itemsPerPage;
    const currentItems = filteredPayments.slice(firstPage, lastPage);

    const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

    return (
        <div className="container4">
            <div className="actions2">
                <input
                    type="text"
                    placeholder="Search by any field"
                    className="search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Beneficiary Name</th>
                        <th>Account Number</th>
                        <th>Account IFSC</th>
                        <th>Bank Name</th>
                        <th>Payout Ref</th>
                        <th>Narration</th>
                        <th>Amount</th>
                        <th>Remarks</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPayments.length === 0 ? (
                        <tr>
                            <td colSpan="10">No payments available</td>
                        </tr>
                    ) : (
                        currentItems.map((payment) => (
                            <tr key={payment._id}>
                                <td>{payment?.userId?.firstName || "N/A"}</td>
                                <td>{payment?.beneficiaryName || "N/A"}</td>
                                <td>{payment?.accountNum || "N/A"}</td>
                                <td>{payment?.accountIFSC || "N/A"}</td>
                                <td>{payment?.bankName || "N/A"}</td>
                                <td>{payment?.payoutsRef || "N/A"}</td>
                                <td>{payment?.narration || "N/A"}</td>
                                <td>{payment?.amount || "N/A"}</td>
                                <td>{payment?.remarks || "N/A"}</td>
                                <td>{new Date(payment?.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? "active" : ""}
                    >
                        {index + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                )}
            </div>
        </div>
    );
};
