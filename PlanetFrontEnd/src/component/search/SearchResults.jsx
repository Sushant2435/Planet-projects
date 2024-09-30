// src/components/search/SearchResults.js

import React from "react";
import { ListGroup } from "react-bootstrap";

const SearchResults = ({ results, status, error }) => {
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (results?.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <ListGroup>
      {results.map((result) => (
        <ListGroup.Item key={result.id}>{result.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SearchResults;
