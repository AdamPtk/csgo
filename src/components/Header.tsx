import { Box } from '@mui/system';
import Text from './atoms/Text';
import { theme } from '../themes/defaultTheme';

const styles = {
  width: '100%',
  p: 1,
  align: 'left',
  backgroundImage: `linear-gradient(180deg, #1b2031, ${theme.secondary})`,
};

const Header = () => {
  return (
    <Box sx={styles}>
      <Text>PLAYERS</Text>
    </Box>
  );
};

export default Header;
