import { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Text from './atoms/Text';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'secondary.main',
  p: 0.5,
};

interface FooterProps {
  page: number;
  pages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Footer: FC<FooterProps> = ({ page, pages, setPage }) => {
  return (
    <Box width="100%" sx={{ ...style, px: 3 }}>
      <Text>10 per page</Text>
      <Box sx={style}>
        <IconButton
          color="primary"
          disabled={page === 0}
          onClick={() => setPage(0)}
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          color="primary"
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Text>
          Page {page + 1} of {pages}
        </Text>
        <IconButton
          color="primary"
          disabled={page === pages - 1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <IconButton
          color="primary"
          disabled={page === pages - 1}
          onClick={() => setPage(pages - 1)}
        >
          <LastPageIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
