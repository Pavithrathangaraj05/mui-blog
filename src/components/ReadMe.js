import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ReadMe = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Read Me Page</h1>
      <p>This is the Read Me content.</p>
      <Button component={Link} to="/" variant="contained">
        Back to Home
      </Button>
    </div>
  );
};

export default ReadMe;