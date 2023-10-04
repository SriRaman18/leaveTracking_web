import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';

export default function MulIconButton({
  Icon,
  aria = 'icon-label',
  handleClick,
  isDisabled = false,
  title,
}) {
  return (
    <Tooltip title={title}>
      <IconButton aria-label={aria} onClick={handleClick} disabled={isDisabled}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
