import { useEffect, useState } from 'react';
import { Paper, Container } from '@mui/material';
import { Player } from '../types/types';
import getPlayers from '../api/getPlayers';
import Logo from './atoms/Logo';
import Loading from './atoms/Loading';
import List from './List';
import Footer from './Footer';
import Input from './atoms/Input';
import Header from './Header';

const styles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  px: 5,
  py: 2,
  m: 5,
};

const App = () => {
  const [players, setPlayers] = useState<Array<Player>>([]);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    getPlayers(page, search).then((data) => {
      setPlayers(data.content);
      setPages(data.totalPages);
    });
  }, [page, search]);

  return (
    <Container>
      <Paper sx={styles}>
        <Logo />
        <Input setSearch={setSearch} />
        {players?.length ? (
          <>
            <Header />
            <List players={players} />
            <Footer page={page} pages={pages} setPage={setPage} />
          </>
        ) : (
          <Loading />
        )}
      </Paper>
    </Container>
  );
};

export default App;
