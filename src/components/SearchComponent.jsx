import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchComponent = ({ placeholder, onSubmit, input, setInput }) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        variant="standard"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          border: "1px solid orange",
          borderRadius: "12px",
          height: "40px",
          padding: "0 10px",
          "& .MuiInput-root": {
            borderRadius: "12px",
            height: "100%",
            "& .MuiInput-input": {
              padding: "0 2px",
              height: "100%",
              width: "100%",
              placeholder: {
                color: "gray",
                fontSize: "12px",
              },
            },
          },
          "& .MuiInput-underline:before, & .MuiInput-underline:after, & .MuiInput-underline:hover:not(.Mui-disabled):before":
            {
              borderBottom: "none",
            },
        }}
        size="small"
      />
      <Button
        type="submit"
        size="small"
        variant="outlined"
        sx={{
          border: "1px solid orange",
          height: "40px",
          marginLeft: "5px",
          borderRadius: "12px",
          color: "black",
          fontSize: "12px",
          padding: "0 20px",
          textTransform: "none",
          ":hover": {
            backgroundColor: "orange",
            color: "white",
          },
        }}
      >
        Tìm kiếm
      </Button>
    </Box>
  );
};

export default SearchComponent;
