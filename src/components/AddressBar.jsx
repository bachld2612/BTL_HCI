import { Box } from "@mui/material";
import React from "react";

const AddressBar = ({ addresses }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        fontSize: "14px",
        margin: "0 2px",
      }}
    >
      {addresses.map((address, index) => (
        <Box key={index}>
          {index == addresses.length - 1 ? (
            <Box sx={{ fontWeight: "bold" }}>{address}&gt; </Box>
          ) : (
            <Box>{address}&gt; </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default AddressBar;
