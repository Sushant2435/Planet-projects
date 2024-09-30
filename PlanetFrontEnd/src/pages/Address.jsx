import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import address from "/images/address.png";
import SaveAddress from "./SaveAddress";
import { useEffect, useState, useCallback, useMemo } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import axiosInstance from "../config/axiosInstance";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrder,
  fetchPaymentDetails,
} from "../features/createOrder/createOrderSlice";

const Address = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { buynow } = useSelector((state) => state.buynow);
  const dispatch = useDispatch();
  console.log(buynow, "buynow from address page");
  console.log(cartItems, "cart items from address page");

  // console.log(buyNow, "buynow from address page");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [data, setData] = useState([]);
  console.log(data, "data from address");
  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    email: "",
    Pincode: "",
    Landmark: "",
    district: "",
    state: "",
    addressAs: "home",
    fullAddress: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const resetForm = useCallback(() => {
    setNewAddress({
      name: "",
      mobile: "",
      email: "",
      Pincode: "",
      Landmark: "",
      district: "",
      state: "",
      addressAs: "home",
      fullAddress: "",
    });
    setEditMode(false);
    setEditId(null);
  }, []);

  const GetAddress = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/address/getmydata");
      console.log(response.data, "get Address");
      setData(response.data);
    } catch (error) {
      console.error(error, "error");
    }
  }, []);

  useEffect(() => {
    GetAddress();
  }, [GetAddress]);
  // useEffect(() => {
  //   return () => {
  //     dispatch(clearBuynow());
  //   };
  // }, [dispatch]);
  const handleOnEdit = useCallback(
    (id) => {
      console.log(id, "id from handle delete");
      const addressToEdit = data?.myAddressData?.find(
        (item) => item._id === id
      );
      console.log("edit address", addressToEdit);
      if (addressToEdit) {
        setNewAddress({
          name: addressToEdit.name,
          mobile: addressToEdit.mobile,
          email: addressToEdit.email,
          Pincode: addressToEdit.Pincode,
          Landmark: addressToEdit.Landmark,
          district: addressToEdit.district,
          state: addressToEdit.state,
          addressAs: addressToEdit.addressAs,
          fullAddress: addressToEdit.fullAddress,
        });
        setEditMode(true);
        setEditId(id);
        setIsFormVisible(true);
      }
    },
    [data]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        const response = await axiosInstance.delete(`/address/${id}`);
        GetAddress();
        console.log(response.data, "ideefe");
        toast.success("Address Deleted Successfully", {
          position: "top-right",
          autoClose: 2000,
        });
      } catch (error) {
        console.error(error, "error");
      }
    },
    [GetAddress]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        if (editMode && editId) {
          // Update existing address
          const response = await axiosInstance.put(
            `/address/${editId}`,
            newAddress
          );
          console.log("Address updated successfully:", response.data);
          toast.success("Address Updated Successfully", {
            position: "top-right",
            autoClose: 2000,
          });
          setIsFormVisible(false);
        } else {
          // Add new address
          const response = await axiosInstance.post("/address", newAddress);
          console.log("Address posted successfully:", response.data);
          toast.success("New Address Saved", {
            position: "top-right",
            autoClose: 2000,
          });
        }
        resetForm();
        setEditMode(false);
        setEditId(null);
        GetAddress();
      } catch (error) {
        console.error("Failed to submit address:", error);
      }
    },
    [GetAddress, newAddress, editMode, editId, resetForm]
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  }, []);

  const handleAddressTypeChange = useCallback((e) => {
    const { value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      addressAs: value,
    }));
  }, []);

  const addressForm = useMemo(
    () => (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            value={newAddress.name}
            name="name"
          />
        </Form.Group>
        <Form.Group controlId="formMobile" className="mb-3">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control
            type="text"
            maxLength={10}
            placeholder="Mobile No"
            onChange={handleInputChange}
            value={newAddress.mobile}
            name="mobile"
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email.."
            onChange={handleInputChange}
            value={newAddress.email}
            name="email"
          />
        </Form.Group>

        <h5>ADDRESS</h5>
        <Row>
          <Col>
            <Form.Group controlId="formDistrict" className="mb-3">
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                placeholder="district"
                onChange={handleInputChange}
                value={newAddress.district}
                name="district"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formState" className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                onChange={handleInputChange}
                value={newAddress.state}
                name="state"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formPinCode" className="mb-3">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                maxLength={6}
                placeholder="Pin Code"
                onChange={handleInputChange}
                value={newAddress.Pincode}
                name="Pincode"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formLandmark" className="mb-3">
              <Form.Label>Landmark</Form.Label>
              <Form.Control
                type="text"
                placeholder="Landmark"
                onChange={handleInputChange}
                value={newAddress.Landmark}
                name="Landmark"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Full Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Full Address :-"
            onChange={handleInputChange}
            value={newAddress.fullAddress}
            name="fullAddress"
          />
        </Form.Group>

        <h5>SAVE ADDRESS AS</h5>

        <Form.Group
          controlId="formSaveAddressAs"
          className="mb-3 d-flex justify-content-between align-items-center border rounded p-2"
          style={{ maxWidth: "250px" }}
        >
          <div
            className="d-flex align-items-center"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Form.Check
              inline
              label="Home"
              name="addressType"
              type="radio"
              id="inline-radio-1"
              value="home"
              checked={newAddress.addressAs === "home"}
              onChange={handleAddressTypeChange}
              className="position-relative"
            />
          </div>
          <div
            className="d-flex align-items-center"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Form.Check
              inline
              label="Office"
              name="addressType"
              type="radio"
              id="inline-radio-2"
              value="office"
              checked={newAddress.addressAs === "office"}
              onChange={handleAddressTypeChange}
              className="position-relative"
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          {editMode ? "Update Address" : "Save"}
        </Button>
      </Form>
    ),
    [
      handleSubmit,
      handleInputChange,
      handleAddressTypeChange,
      newAddress,
      editMode,
    ]
  );

  return (
    <Container className="my-5">
      <img
        src={address}
        className="addresslogo"
        alt="Address"
        style={{ marginTop: "50px" }}
      />
      <Row>
        <Col
          md={6}
          className={`form-container p-4 border rounded ${
            isFormVisible ? "expanded" : "collapsed"
          }`}
        >
          <Button
            style={{
              background: "#AB68EF",
              border: "none",
              width: "40%",
              position: "absolute",
              top: 245,
              left: 120,
            }}
            onClick={() => {
              setIsFormVisible((prev) => !prev);
              if (!isFormVisible) resetForm();
            }}
          >
            <div className="d-flex gap-2">
              <div>
                {isFormVisible ? (
                  <AiOutlineMinus color="#FFFFFF" />
                ) : (
                  <FiPlus color="#FFFFFF" />
                )}
              </div>
              {editMode ? "EDIT ADDRESS" : "ADD A NEW ADDRESS"}
            </div>
          </Button>
          {isFormVisible && addressForm}
        </Col>
        <Col md={6}>
          <Card className="p-3 w-55">
            <h5>
              PRICE DETAILS (
              {buynow && buynow.length > 0
                ? 1
                : cartItems?.cart?.cartItems?.length}
              Items)
            </h5>
            {buynow && buynow.length > 0 ? (
              <>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>₹{buynow[0]?.orderSummary?.total}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span style={{ color: "#00FF29" }}>
                    ₹ -{buynow[0]?.orderSummary?.discount}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Sub Total</span>
                  <span style={{ color: "#00FF29" }}>
                    ₹ {buynow[0]?.orderSummary?.subtotal}
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Delivery Charges</span>
                  <span style={{ color: "#00FF29" }}>
                    ₹ {buynow[0]?.orderSummary?.deliveryCharges}
                  </span>
                </div>
              </>
            ) : (
              cartItems &&
              cartItems.orderSummary && (
                <>
                  <div className="d-flex justify-content-between">
                    <span>Price</span>
                    <span>₹{cartItems.orderSummary?.total}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount</span>
                    <span style={{ color: "#00FF29" }}>
                      ₹ -{cartItems.orderSummary?.discount}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Sub Total</span>
                    <span style={{ color: "#00FF29" }}>
                      ₹ {cartItems.orderSummary?.subtotal}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Charges</span>
                    <span style={{ color: "#00FF29" }}>
                      ₹{cartItems.orderSummary?.deliveryCharges}
                    </span>
                  </div>
                </>
              )
            )}
            <hr />
            <div className="d-flex justify-content-between font-weight-bold">
              <span>Total Amount</span>
              <span style={{ fontWeight: "bold" }}>
                ₹{" "}
                {buynow.length > 0
                  ? buynow[0]?.orderSummary?.totalPrice
                  : cartItems?.orderSummary?.totalPrice}
              </span>
            </div>
          </Card>
        </Col>
      </Row>
      <div>
        <SaveAddress
          data={data}
          handleDelete={handleDelete}
          handleOnEdit={handleOnEdit}
        />
      </div>
    </Container>
  );
};

export default Address;
