import Loading from "../component/Loading";
import { IoBagOutline } from "react-icons/io5";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrder } from "../features/order/orderSlice";

const MyOrder = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMyOrder());
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="d-flex" style={{ marginLeft: 600, marginTop: 90 }}>
        <span>
          <IoBagOutline size={30} color="#AB68EF" />
        </span>
        <h5 style={{ fontSize: 29, fontWeight: "bold", marginLeft: 15, top: 10, color: "#AB68EF", }}>MY ORDER</h5>
      </div>
      <Container>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order, orderIndex) => (
            <div key={order._id}>
              <Row className="mb-4 align-items-center">
                <Col>
                  <div className="cart d-flex justify-content-between" style={{ marginTop: 60 }}>
                    <div>
                      <h6 style={{ marginTop: 6, marginLeft: 2 }}>Order {orderIndex + 1}/{orders.length}</h6>
                    </div>
                    <div>
                      <Button style={{ background: "#FFFFFF", color: "black", fontWeight: "bold", border: "none", }}>Remove</Button>
                    </div>
                  </div>
                </Col>
              </Row>

              {order.orderItems.map((item) => (
                <Row key={item._id} className="border rounded p-2 mb-4">
                  <Col md={2} xs={12} className="text-center">
                    <Image src={item.productId.images[0]} rounded alt={item.productId.name} fluid style={{ height: 150, width: 120, marginTop: "30px" }} />
                  </Col>
                  <Col md={8} xs={12}>
                    <Row>
                      <Col xs={12}>
                        <h5>{item.productId.name}</h5>
                        <p>{item.productId.description}</p>
                        <hr />
                      </Col>
                      <Col xs={6}>
                        <p className="fw-bold text-success">₹{item.productId.finalPrice}</p>
                        <p className="text-muted">₹{item.productId.basePrice}</p>
                      </Col>
                      <Col xs={6} className="text-end">
                        <p className="text-danger">{item.productId.discountPrice}%</p>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-around">
                      <Col className="d-flex gap-2" xs={6}>
                        <p>SIZE:</p>
                        <p>{item.size}</p>
                      </Col>
                      <Col className="d-flex gap-2" xs={6}>
                        <p>Qty:</p>
                        <p>{item.quantity}</p>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col xs={12} className="d-flex justify-content-around" style={{ fontWeight: "bold" }}>
                        <p>10 Days Return Available</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))}
            </div>
          ))
        )}
      </Container>
    </>
  );
};

export default MyOrder;
