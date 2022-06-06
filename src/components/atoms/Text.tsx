import { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';

const Text: FC<{ children: ReactNode }> = ({ children }) => (
  <Typography color="primary">{children}</Typography>
);

export default Text;
