import React, { useCallback, useState } from "react";
import { Box } from "@mui/material";
import { CustomButton, CustomInput } from "../molecules";

export default () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, [number]);

  const handleDecrement = useCallback(() => {
    setNumber((prev) => prev - 1);

    if (number <= 0) {
      setNumber(0);
    }
  }, [number]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: " flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <CustomInput value={number} />
      </Box>
      <Box>
        <CustomButton
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </Box>
    </Box>
  );
};
