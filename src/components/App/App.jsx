import Footer from "../Footer/Footer";
import s from "./App.module.css";
import AppHeader from "../../AppHeader/AppHeader";
import CardList from "../CardList/CardList";

function App() {
  return (
    <>
      <AppHeader />
      <main className="main">
        <CardList />
      </main>

      <Footer />
    </>
  );
}

export default App;
