import Footer from "../Footer/Footer";
import AppHeader from "../../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import s from "./App.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import { Container, Pagination, Stack} from '@mui/material';

import { useState, useEffect} from "react";
import { postData } from "../../assets/posts";
// import Card from "../Card/Card";


function App() {

  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('Длина--->', postData.length);
    console.log('postData--->', postData);

  }, [page]);


  return (
    <>
      <AppHeader />
      <main className="main">
        <section className="section__main">
          <InfoHeader />
        </section>

        <section className="section__main">
          <CardList />

          <Container className={s.pagination} sx={{ marginTop: 5 }} maxWidth="md">
            <Stack spacing={2}>
              <Pagination
                count={postData.length}
                //  текущая страница
                page={page}
                // что быдет происходить когда человек кликнет на станицу
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                sx={{ marginY: 3, marginX: 'auto' }}
                />
            </Stack>
          </Container>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
