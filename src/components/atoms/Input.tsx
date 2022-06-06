import { FC } from 'react';
import { Box } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { theme } from '../../themes/defaultTheme';

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '40%',
  p: 1,
  m: 2,
  backgroundColor: 'secondary.main',
};

const inputStyles = {
  width: '90%',
  marginLeft: '10px',
  border: 'none',
  outline: 'none',
  color: theme.primary,
  backgroundColor: 'transparent',
};

interface InputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ setSearch }) => {
  return (
    <Box sx={boxStyles}>
      <SearchOutlinedIcon color="primary" />
      <input
        style={inputStyles}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for teams, players, matches..."
      />
    </Box>
  );
};

export default Input;
