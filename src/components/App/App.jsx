import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import s from "./App.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <main className="main">
        <section className={s.content}>
          <CardList />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
