import { Box, Typography } from "@mui/material";
import React from "react";
const Chip = (props) => {
  const { variant, textColor, bgColor, text } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: bgColor,
          borderRadius: "3.5px",
          justifyContent: "center",
          alignItems: "center",
          padding: "2.5px",
        }}
      >
        <Typography variant={variant} color={textColor}>
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default Chip;
