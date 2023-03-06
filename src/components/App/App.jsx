import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import s from "./App.module.css";
import InfoHeader from "../InfoHeader/InfoHeader";
import {useState, useEffect} from 'react';
import api from "../../utils/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page)])
      .then(([userData, postData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        setCountPagination(Math.ceil(postData.total / 12));
      })
      .catch((err) => console.log(err));
  }, [page]);


  const handleUpdataUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    })
  }

  return (
    <>
      <AppHeader user={currentUser} updateUserHandle={handleUpdataUser} />
      <main className="main">
        <section className="section__main">
          <InfoHeader />
        </section>

        <section className="section__main">
          <CardList posts={posts} page={page} setPage={setPage} countPagination={countPagination} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
