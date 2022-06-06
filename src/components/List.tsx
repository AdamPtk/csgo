import { FC, ReactNode } from 'react';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Text from './atoms/Text';
import LogoMin from './atoms/LogoMin';
import CountryFlag from './atoms/CountryFlag';
import { getPlayerAge } from '../helpers/getPlayerAge';
import { Player } from '../types/types';

const Cell: FC<{
  align?: 'left' | 'center' | 'right' | 'inherit' | 'justify';
  children: ReactNode;
}> = ({ align, children }) => (
  <TableCell align={align} sx={{ p: 1, borderColor: 'secondary.main' }}>
    <Text>{children}</Text>
  </TableCell>
);

function createData(
  name: string,
  nick: string,
  age: number,
  country: string,
  ratio: number,
) {
  return { name, nick, age, country, ratio };
}

const List: FC<{ players: Player[] }> = ({ players }) => {
  const rows = [
    ...players.map((player) =>
      createData(
        player.name,
        player.nick,
        getPlayerAge(player.birthYear),
        player.country,
        player.ratingValue,
      ),
    ),
  ];
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <Cell> </Cell>
            <Cell>NAME</Cell>
            <Cell>NICK</Cell>
            <Cell align="center">AGE</Cell>
            <Cell align="center">COUNTRY</Cell>
            <Cell align="right">RATIO</Cell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <Cell>
                <LogoMin />
              </Cell>
              <Cell>{row.name}</Cell>
              <Cell>{row.nick}</Cell>
              <Cell align="center">{row.age}</Cell>
              <TableCell
                align="center"
                sx={{ p: 1, borderColor: 'secondary.main' }}
              >
                <CountryFlag countryCode={row.country} />
              </TableCell>
              <Cell align="right">{row.ratio.toFixed(2)}</Cell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
