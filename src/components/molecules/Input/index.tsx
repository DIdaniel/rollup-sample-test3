import React from "react";
import { Input } from "@mui/material";

type CustomInputProps = {
  value: number;
};

export const CustomInput = (props: CustomInputProps) => {
  const { value } = props;

  return <Input value={value} sx={{ width: "100px", mr: 2 }} />;
};
