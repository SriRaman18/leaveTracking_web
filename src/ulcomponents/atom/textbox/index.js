import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Label from "../lable";
import { useTheme } from "@emotion/react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiFormLabel-root.Mui-focused": {
    color: theme.palette.color.main,
  },
  "& .Mui-focused": {
    border: `1px solid ${theme.palette.border.main}`,
  },
}));

export default function TextBox({
  label,
  value,
  name,
  error,
  helperText,
  onChange,
  variant = "outlined",
  fullWidth = true,
  size = "small",
  multiline = false,
  rows,
  placeholder = "",
  required,
}) {
  const theme = useTheme();

  return (
    <>
      <Label
        variant="subtitle1"
        label={label}
        float="left"
        style={{ color: theme.palette.fontColor.main, fontWeight: "600" }}
      />
      <CustomTextField
        id={`textbox_${label}`}
        variant={variant}
        fullWidth={fullWidth}
        size={size}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        helperText={helperText}
        required
      />
    </>
  );
}
