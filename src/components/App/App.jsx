import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import InfoHeader from "../InfoHeader/InfoHeader";
import { useState, useEffect } from "react";
import api from "../../utils/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  // console.log(currentUser._id);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page)])
      .then(([userData, postData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        setCountPagination(Math.ceil(postData.total / 12));
      })
      .catch((err) => console.log(err));
  }, [page]);

  // console.log(posts[0]._id);

  // Обновление пользователя
  const handleUpdataUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  // likes
  const handlePostLike = (post) => {
    // console.log(posts[0].likes);
    const isLiked = post.likes.some((id) => id === currentUser._id);

    api.changeLikePost(post._id, isLiked).then((newPost) => {
      const newPosts = posts.map((post) => {
        // console.log("Старая карточка", post);
        // console.log("Новая карточка", newPost);
        return post._id === newPost._id ? newPost : post;
      });
      setPosts(newPosts);
    });
  };

  return (
    <>
      <AppHeader user={currentUser} updateUserHandle={handleUpdataUser} />
      <main className="main">

        <section className="section__main">
          <InfoHeader/>
        </section>

        <section className="section__main">
          <CardList
            posts={posts}
            page={page}
            setPage={setPage}
            countPagination={countPagination}
            onPostLike={handlePostLike}
            currentUser={currentUser}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
