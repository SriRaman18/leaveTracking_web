import React from 'react';
import { Typography, Tooltip } from '@mui/material';

export default function Lable({ label, variant, float, style, maxLength }) {
  const truncatedText =
    label.length > maxLength ? `${label.slice(0, maxLength)}...` : label;
  return (
    <Tooltip title={label.length > maxLength ? label : ''}>
      <Typography style={{ ...style, float: float }} variant={variant}>
        {truncatedText}
      </Typography>
    </Tooltip>
  );
}
