import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import InfoHeader from "../InfoHeader/InfoHeader";
import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { isLiked } from "../../utils/posts";
import { Route, Routes } from "react-router-dom";
import FavouritesPostPage from "../../pages/FavouritesPostPage/FavouritesPostPage";
import PostPage from "../../pages/PostPage/PostPage";
import { CardContext } from "../../context/cardContext";
import { UserContext } from "../../context/userContext";

import Post from "../Post/Post";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  // console.log(currentUser._id);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page)])
      .then(([userData, postData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        const favouritesPosts = postData.posts.filter((item) =>
          isLiked(item.likes, userData._id)
        );
        setFavourites(favouritesPosts);
        setCountPagination(Math.ceil(postData.total / 12));
      })
      .catch((err) => console.log(err));
  }, [page]);

  // Обновление пользователя
  const handleUpdataUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  // likes
  // const handlePostLike = (post) => {
  //   // console.log(posts[0].likes);
  //   const isLiked = post.likes.some((id) => id === currentUser._id);

  //   api.changeLikePost(post._id, isLiked).then((newPost) => {
  //     const newPosts = posts.map((post) => {
  //       // console.log("Старая карточка", post);
  //       // console.log("Новая карточка", newPost);
  //       return post._id === newPost._id ? newPost : post;
  //     });
  //     setPosts(newPosts);

  //   });

  const handlePostLike = useCallback(
    (postLikes) => {
      const liked = isLiked(postLikes.likes, currentUser._id);
      return api.changeLikePost(postLikes._id, liked).then((newPost) => {
        const newPosts = posts.map((post) => {
          return post._id === newPost._id ? newPost : post;
        });

        if (!liked) {
          setFavourites((prevState) => [...prevState, newPost]);
        } else {
          setFavourites((prevState) =>
            prevState.filter((post) => post._id !== newPosts._id)
          );
        }

        setPosts(newPosts);
        return newPost;
      });
    },
    [posts, currentUser]
  );
  // console.log('favourites---------->' ,favourites);

  // };

  return (
    <UserContext.Provider value={{ user: currentUser, isLoading }}>
      <CardContext.Provider
        value={{ posts, favourites, handleLike: handlePostLike, isLoading }}
      >
        <AppHeader user={currentUser} updateUserHandle={handleUpdataUser} />
        <main className="main">
          <section className="section__main">
            <InfoHeader />
          </section>

          <section className="section__main">
            <Routes>
              <Route
                index
                element={
                  <CardList
                    posts={posts}
                    page={page}
                    setPage={setPage}
                    countPagination={countPagination}
                    onPostLike={handlePostLike}
                    currentUser={currentUser}
                  />
                }
              />
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="/favourites" element={<FavouritesPostPage />} />
            </Routes>
          </section>
        </main>

        <Footer />
      </CardContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
