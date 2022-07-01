import React from "react";
import { Box, Button } from "@mui/material";

type CustomButtonProps = {
  handleIncrement: () => void;
  handleDecrement: () => void;
};

export const CustomButton = (props: CustomButtonProps) => {
  const { handleIncrement, handleDecrement, ...others } = props;

  return (
    <Box
      sx={{
        width: "150px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button onClick={handleIncrement} sx={{ border: "1px solid dodgerBlue" }}>
        +
      </Button>
      <Button onClick={handleDecrement} sx={{ border: "1px solid dodgerBlue" }}>
        -
      </Button>
    </Box>
  );
};
