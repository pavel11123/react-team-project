import Footer from "../Footer/Footer";
import AppHeader from "../../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import s from "./App.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";

// import Card from "../Card/Card";

function App() {
  return (
    <>
      <AppHeader />
      <main className="main">
        <section className="section__main">
          <InfoHeader />
        </section>

        <section className="section__main">
          <CardList />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
