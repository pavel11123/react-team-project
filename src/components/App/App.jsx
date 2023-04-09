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
import { SlideContext } from "../../context/slideContext";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";

function App() {
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page), api.getSlide()])
      .then(([userData, postData, slideData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        setSlide(slideData);
        const favouritesPosts = postData.posts.filter((item) =>
          isLiked(item.likes, userData._id)
        );
        setFavourites(favouritesPosts);
        setCountPagination(Math.ceil(postData.total / 12));
        // console.log(setSlide);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // Обновление пользователя
  const handleUpdataUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  const handleDeletePost = async (postId) => {
    console.log("works---->", postId);
    await api.deletePost(postId).then((newPost) => {
      const newPosts = posts.filter((e) => e._id !== newPost._id);
      setPosts([...newPosts]);
    });
  };

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
            prevState.filter((post) => post._id !== newPost._id)
          );
        }

        setPosts(newPosts);
        return newPost;
      });
    },
    [posts, currentUser]
  );

  return (
    <UserContext.Provider value={{ user: currentUser, isLoading }}>
      <CardContext.Provider
        value={{
          posts,
          favourites,
          handleLike: handlePostLike,
          isLoading,
          handleDeletePost,
          currentUser,
        }}
      >
        <AppHeader user={currentUser} updateUserHandle={handleUpdataUser} />
        <main className="main">
          <Routes>
            <Route path="/cards" element={<InfoHeader />} />
          </Routes>

          <section className="main__section">
            <SlideContext.Provider value={{ slide }}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route
                  path="/cards"
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
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </SlideContext.Provider>
          </section>
        </main>

        <Footer />
      </CardContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
