// src/components/search/SearchModal.js
import { useEffect, useRef } from "react";

import Form from "react-bootstrap/Form";

import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";

import SearchResults from "./SearchResults";

const SearchModal = ({
  show,
  onHide,
  query,
  setQuery,
  results,
  status,
  error,
}) => {
  const inputRef = useRef(null); // Create a ref for the input

  // Focus the input field when the modal is shown
  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} size="lg" fullscreen>
      {/* <Modal.Header
        style={{ marginRight: 30, marginTop: 30, marginLeft: 30 }}
        closeButton
      >
        {/* <Modal.Title>Search Products</Modal.Title> 
        <Modal.Title>
          <Form.Control
            style={{ width: 1220, borderRadius: 30 }}
            size="lg"
            type="text"
            placeholder="search..."
          />
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Header
        style={{
          marginRight: 30,
          marginTop: 30,
          marginLeft: 30,
          position: "relative",
        }}
        // closeButton
      >
        <span
          className="btn-close"
          style={{
            position: "absolute",
            right: "1rem", // Align the button to the right
            top: "1.5rem", // Align the button to the top
            width: "1.5rem", // Adjust the width
            height: "1.5rem", // Adjust the height
            fontSize: "1.5rem", // Adjust the size of the cross icon
            cursor: "pointer",
          }}
          onClick={onHide} // Manually trigger close on click
        ></span>

        <Modal.Title>
          <InputGroup size="lg" style={{ width: 1220, borderRadius: 30 }}>
            <InputGroup.Text style={{ borderRadius: "30px 0 0 30px" }}>
              <IoSearch />
            </InputGroup.Text>
            <Form.Control
              style={{ borderRadius: "0px 30px 30px 0" }}
              type="text"
              ref={inputRef} // Attach the ref to the input
              placeholder="search..."
            />
          </InputGroup>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Render the Search Results */}
        <div className="mt-3">
          {/* <SearchResults results={results} status={status} error={error} /> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
