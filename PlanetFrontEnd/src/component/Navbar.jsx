import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart2 } from "react-icons/bs";
import { PiHeartStraight } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { LinkContainer } from "react-router-bootstrap";
import { IoSearchOutline } from "react-icons/io5";
import { useCallback, useEffect, useState } from "react";
import PhoneOtpForm from "./FormModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, resetProducts, } from "../features/product/productSlice";
import { Button } from "react-bootstrap";
import { logout } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import tostSuccess from "/public/Group.svg";
import { clearCart, fetchCartItems } from "../features/cart/cartSlice";
import axiosInstance from "../config/axiosInstance";
import PlanetLogo from "./assets/PlanetLogo";
import {
  clearWishlist,
  fetchWishlisttItems,
} from "../features/wishlist/wishlistSlice";
import { useDebounce } from "./hooks/useDebounce";
import { fetchSearchResults } from "../features/search/searchSlice";
import SearchModal from "./search/SearchModal";
import { jwtDecode } from "jwt-decode";

function TopNav() {
  const [modalShow, setModalShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [serachModal, setSearchModal] = useState(false);
  const [query, setQuery] = useState("");

  // const [searchBarVisible, setSearchBarVisible] = useState(false);
  console.log(userDetails, "userDetails xyz");
  console.log(userDetails, "userDetails");
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  console.log(wishlistItems, "wishlist items from navbar");
  console.log(cartItems, "cart items from navbar");
  const dispatch = useDispatch();
  console.log(isLogin, "islogin");
  const debounceDelay = 500;
  // Get search results from Redux state
  const { results, status, error } = useSelector((state) => state.search || {});
  // Debounce the search query input
  const debouncedQuery = useDebounce(query, debounceDelay);

  // Handle API call when the debounced query changes
  const handleSearch = useCallback(() => {
    if (debouncedQuery.trim()) {
      dispatch(fetchSearchResults(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  useEffect(() => {
    if (debouncedQuery) {
      handleSearch();
    }
  }, [debouncedQuery, handleSearch]);

  const handleShow = () => setSearchModal(true);
  const handleClose = () => setSearchModal(false);

  // const handleLogin = async () => {
  //   setIsLogin(true);
  //   setModalShow(false);
  //   await getUserDetails();
  // };


  // const checkToken = () => {

  //   let token = localStorage.getItem("token");

  //   if (token) {
  //     try {
  //       const decoded = jwtDecode(token);
  //       console.log(decoded, "Decoded token");

  //       const currentTime = Math.floor(Date.now() / 1000);
  //       console.log(currentTime, "Current time");
  //       console.log(decoded.exp, "Token expiration time");

  //       // Check if token has expired
  //       if (decoded.exp < currentTime) {
  //         localStorage.removeItem('token');
  //         console.log('Token expired and removed');
  //       } else {
  //         console.log('Token is still valid');
  //       }
  //     } catch (error) {
  //       console.error("Error decoding token:", error);
  //     }
  //   } else {
  //     console.log('No token found');
  //   }
  // };

  // // Example usage
  // useEffect(() => {
  //   checkToken();
  // }, []);


  const handleLogin = useCallback(async () => {
    setIsLogin(true);
    setModalShow(false);
    await getUserDetails();
  }, []);

  // const handleSearch = () => {
  //   setSearchBarVisible(!searchBarVisible);
  // };

  const getUserDetails = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/user/userDetails");
      console.log(response, "response from get user details");
      setUserDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // async function getCartData() {
  //   dispatch(fetchCartItems);
  // }
  const getCartData = useCallback(() => {
    if (isLogin) {
      dispatch(fetchCartItems());
    }
    setExpanded(false)
  }, [dispatch, isLogin]);

  const getWishlistData = useCallback(() => {
    if (isLogin) {
      dispatch(fetchWishlisttItems());
    }
    setExpanded(false)
  }, [dispatch, isLogin]);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLogin(true);
  //     getUserDetails();
  //     getCartData();
  //   }
  // }, []);
  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     const currentTime = Date.now() / 1000;

  //     if (decodedToken.exp < currentTime) {
  //       // If token is expired, log out
  //       handleLogout();
  //     } else {
  //       setIsLogin(true);
  //       getUserDetails();
  //       getCartData();
  //       getWishlistData();
  //     }
  //   }
  // }, [getUserDetails, getCartData, getWishlistData, token]);

  // const handleLogout = useCallback(() => {
  //   localStorage.removeItem("token");
  //   dispatch(logout());
  //   dispatch(clearCart());
  //   dispatch(clearWishlist());
  //   setIsLogin(false);
  //   setUserDetails([]);
  //   toast.success(
  //     <div style={{ marginLeft: "20px" }}>Logout Successfully</div>,
  //     {
  //       icon: (
  //         <img
  //           src={tostSuccess}
  //           style={{ width: "30px", height: "30px" }}
  //           alt="logo"
  //         />
  //       ),
  //       position: "top-center",
  //       autoClose: 2000,
  //     }
  //   );
  // }, [dispatch]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      getUserDetails();
      getCartData();
      getWishlistData();
    }
  }, [getUserDetails, getCartData, getWishlistData, token]);

  // const handleLogout = useCallback(() => {
  //   localStorage.removeItem("token");
  //   dispatch(logout());
  //   dispatch(clearCart());
  //   dispatch(clearWishlist());
  //   setIsLogin(false);
  //   setUserDetails([]);
  //   setExpanded(false)
  //   toast.success(
  //     <div style={{ marginLeft: "20px" }}>Logout Successfully</div>,
  //     {
  //       icon: (
  //         <img
  //           src={tostSuccess}
  //           style={{ width: "30px", height: "30px" }}
  //           alt="logo"
  //         />
  //       ),
  //       position: "top-center",
  //       autoClose: 2000,
  //     }
  //   );
  // }, [dispatch]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearWishlist());
    setIsLogin(false);
    setUserDetails([]);
    setExpanded(false);
    toast.success(
      <div style={{ marginLeft: "20px" }}>Logout Successfully</div>,
      {
        icon: (
          <img
            src={tostSuccess}
            style={{ width: "30px", height: "30px" }}
            alt="logo"
          />
        ),
        position: "top-center",
        autoClose: 2000,
      }
    );
  }, [dispatch]);


  function checkTokenOnLoad() {
    const token = localStorage.getItem('token');
    if (!token) {
      handleLogout();
      return;
    }

    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);

    const expirationTime = decodedToken?.exp * 1000;
    const currentTime = Date.now();



    if (expirationTime && currentTime >= expirationTime) {
      console.log("Token has expired, logging out...");
      handleLogout();
    } else {
      const timeToLogout = expirationTime - currentTime;
      console.log("Time to Logout (ms):", timeToLogout);

      if (timeToLogout > 0) {
        setTimeout(() => {
          handleLogout();
        }, timeToLogout);
      }
    }
  }

  useEffect(() => {
    if (isLogin) {
      checkTokenOnLoad();
    }
  }, [isLogin]);

  useEffect(() => {
    function checkTokenOnLoad() {
      const token = localStorage.getItem("token");
      if (!token) {
        handleLogout();
        return;
      }

      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);

      const expirationTime = decodedToken?.exp * 1000;
      const currentTime = Date.now();

      console.log("Expiration Time:", expirationTime);
      console.log("Current Time:", currentTime);

      if (expirationTime && currentTime >= expirationTime) {
        console.log("Token has expired, logging out...");
        handleLogout();
      } else {
        const timeToLogout = expirationTime - currentTime;
        console.log("Time to Logout (ms):", timeToLogout);

        if (timeToLogout > 0) {
          setTimeout(() => {
            handleLogout();
          }, timeToLogout);
        }
      }
    }
    if (isLogin) {
      checkTokenOnLoad();
    }
  }, [isLogin, handleLogout]);


  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        expanded={expanded}

        className="h-md-75"
        style={{

          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          background: "#FFFFFF",
        }}
      >
        <Container fluid>
          <LinkContainer style={{ marginLeft: 30 }} to="/">
            <Navbar.Brand className="logo-pro">
              <PlanetLogo />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse id="navbarScroll" style={{ marginLeft: 100 }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", marginLeft: "50px" }}
              navbarScroll
            >
              <LinkContainer style={{ fontWeight: "bold" }} to="/" onClick={() => setExpanded(false)}>
                <Nav.Link style={{ marginRight: "30px" }} className="home">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                to="/men"
                onClick={() => {
                  dispatch(fetchProductsByCategory("Male"));
                  dispatch(resetProducts());
                  setExpanded(false);
                }}
              >
                <Nav.Link style={{ marginRight: "30px", marginLeft: "30px" }}>
                  Men
                </Nav.Link>
              </LinkContainer>
              <LinkContainer
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                to="/women"
                onClick={() => {
                  dispatch(resetProducts());
                  dispatch(fetchProductsByCategory("Female"));
                  setExpanded(false);
                }}
              >
                <Nav.Link
                  href="#"
                  style={{ marginRight: "30px", marginLeft: "30px" }}
                >
                  Women
                </Nav.Link>
              </LinkContainer>
              <LinkContainer
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                to="/footwear"
                onClick={() => {
                  dispatch(fetchProductsByCategory("shoes"));
                  dispatch(resetProducts());
                  setExpanded(false);
                }}
              >
                <Nav.Link style={{ marginRight: "30px" }}>Footwear</Nav.Link>
              </LinkContainer>
              <LinkContainer
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <Nav.Link style={{ marginRight: "30px" }}>About</Nav.Link>
              </LinkContainer>
              <LinkContainer
                style={{ fontWeight: "bold", marginLeft: "30px" }}
                to="/contact-us"
                onClick={() => setExpanded(false)}
              >
                <Nav.Link
                  style={{
                    marginRight: "30px",
                    padding: 20,
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>

            <IoSearchOutline
              size={24}
              style={{
                marginRight: "20px",
                height: 50,
                cursor: "pointer",
              }}
              onClick={handleShow}
            />
            <SearchModal
              show={serachModal}
              onHide={handleClose}
              query={query}
              setQuery={setQuery}
              results={results}
              status={status}
              error={error}
            />
            <LinkContainer
              style={{ position: "relative" }}
              to="/wishlist"
              onClick={getWishlistData}
            >
              <Nav.Link>
                {wishlistItems?.myWhilist?.whislistItems?.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 25,
                      height: 25,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: -10,
                      right: 10,
                      zIndex: 1000,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {wishlistItems?.myWhilist?.whislistItems?.length}
                  </div>
                )}
                <PiHeartStraight size={28} style={{ marginRight: "28px" }} />
              </Nav.Link>
            </LinkContainer>

            <div className="avatar-container">
              <div
                onClick={() => !isLogin && setModalShow(true)}
                // className="avatar-link"
                style={{ cursor: "pointer" }}
              >
                <RxAvatar
                  size={28}
                  style={{ marginRight: "28px", overflow: "hidden" }}
                />
              </div>
              {isLogin && (
                <div
                  className="user-info-dropdown "
                  style={{ background: "white" }}
                >
                  <p className="text-dark">Hello, User</p>
                  <p className="text-dark">
                    Name: {userDetails?.userData?.firstName}
                  </p>
                  <LinkContainer to="/order_page" style={{ marginBottom: 10 }} onClick={() => setExpanded(false)}>
                    <Nav.Link className="text-dark">Orders</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/wishlist" style={{ marginBottom: 10 }} onClick={() => setExpanded(false)}>
                    <Nav.Link className="text-dark">wishlist</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact-us" style={{ marginBottom: 10 }} onClick={() => setExpanded(false)}>
                    <Nav.Link className="text-dark">contact us</Nav.Link>
                  </LinkContainer>
                  <Button
                    onClick={handleLogout}
                    style={{
                      background: "#AB68EF",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    logout
                  </Button>
                </div>
              )}
            </div>

            <LinkContainer
              to="/cart"
              onClick={getCartData}
              style={{ fontWeight: "bold", position: "relative" }}
            >
              <Nav.Link>
                {cartItems?.cart?.cartItems?.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      width: 25,
                      height: 25,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: -10,
                      right: 15,
                      zIndex: 1000,
                      fontSize: 14,
                      fontWeight: "bold",
                    }}
                  >
                    {cartItems?.cart?.cartItems?.length}
                  </div>
                )}
                <BsCart2 size={25} style={{ marginRight: "28px" }} />{" "}
              </Nav.Link>
            </LinkContainer>
            {/* </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PhoneOtpForm
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
        handleLogin={handleLogin}
      />
    </>
  );
}
export default TopNav;
