import { FC } from 'react';
import { Box } from '@mui/system';
import {
  AU,
  BA,
  BE,
  BG,
  BR,
  BY,
  CA,
  CN,
  DE,
  DK,
  EE,
  ES,
  FI,
  FR,
  GB,
  JO,
  KZ,
  LT,
  LV,
  PL,
  PT,
  RS,
  RU,
  SE,
  SV,
  TR,
  UA,
  US,
  UZ,
} from 'country-flag-icons/react/3x2';
// import Flags from 'country-flag-icons/react/3x2';
import Text from './Text';

const CountryFlag: FC<{ countryCode: string }> = ({ countryCode }) => {
  // Better solution but typescript won't let it through
  // const Flag = Flags[countryCode];

  const switchFlag = () => {
    switch (countryCode) {
      case 'LV':
        return <LV width={30} />;
      case 'UA':
        return <UA width={30} />;
      case 'DK':
        return <DK width={30} />;
      case 'BA':
        return <BA width={30} />;
      case 'BE':
        return <BE width={30} />;
      case 'FR':
        return <FR width={30} />;
      case 'BR':
        return <BR width={30} />;
      case 'SE':
        return <SE width={30} />;
      case 'BG':
        return <BG width={30} />;
      case 'RU':
        return <RU width={30} />;
      case 'UZ':
        return <UZ width={30} />;
      case 'AU':
        return <AU width={30} />;
      case 'BY':
        return <BY width={30} />;
      case 'RS':
        return <RS width={30} />;
      case 'CA':
        return <CA width={30} />;
      case 'US':
        return <US width={30} />;
      case 'KZ':
        return <KZ width={30} />;
      case 'PT':
        return <PT width={30} />;
      case 'FI':
        return <FI width={30} />;
      case 'PL':
        return <PL width={30} />;
      case 'JO':
        return <JO width={30} />;
      case 'ES':
        return <ES width={30} />;
      case 'EE':
        return <EE width={30} />;
      case 'DE':
        return <DE width={30} />;
      case 'CN':
        return <CN width={30} />;
      case 'TR':
        return <TR width={30} />;
      case 'SV':
        return <SV width={30} />;
      case 'LT':
        return <LT width={30} />;
      case 'GB':
        return <GB width={30} />;
      default:
        return <Text>{countryCode}</Text>;
    }
  };
  return (
    <Box display="flex" justifyContent="center">
      {switchFlag()}
    </Box>
  );
};

export default CountryFlag;
