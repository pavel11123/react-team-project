import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import InfoHeader from "../InfoHeader/InfoHeader";
import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { isLiked } from "../../utils/posts";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import FavouritesPostPage from "../../pages/FavouritesPostPage/FavouritesPostPage";
import PostPage from "../../pages/PostPage/PostPage";
import { CardContext } from "../../context/cardContext";
import { UserContext } from "../../context/userContext";
import { SlideContext } from "../../context/slideContext";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import ModalRegistration from "../ModalRegistration/ModalRegistration";
import LoginForm from "../Forms/LoginForm/LoginForm";
import ResetPasswordForm from "../Forms/ResetPasswordForm/ResetPasswordForm";
import s from "./App.module.scss";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import EditProfileForm from "../Forms/EditProfileForm/EditProfileForm";

import poster from "./image/images.jpg";
import videoMp4 from "./video/main-video.mp4";
import videoWebm from "./video/main-video.webm";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [slide, setSlide] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  const [activeModal, setActiveModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  let countLike = 0;
  let countSlide = 0;
  let countLikeMe = 0;
  slide.forEach((el) => {
    countLike += el.likes.length;

    if (el.author._id === "63ecab9c59b98b038f77b633") {
      countSlide += 1;
      countLikeMe += el.likes.length;
    }
  });

  useEffect(() => {
    if (token) {
      Promise.all([
        api.getUserInfo(token),
        api.getPostsList(page, token),
        api.getSlide(token),
        api.getUsers(token),
      ])
        .then(([userData, postData, slideData, usersData]) => {
          setCurrentUser(userData);
          setIsAuth(true);
          setPosts(postData.posts);
          setSlide(slideData);
          setUsers(usersData);
          const favouritesPosts = slideData.filter((item) =>
            isLiked(item.likes, userData._id)
          );
          setFavourites(favouritesPosts);
          setCountPagination(Math.ceil(postData.total / 12));
        })
        .catch((err) => {
          console.log(err);
          setIsAuth(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [page, token]);

  // Обновление пользователя
  const handleUpdataUser = (userUpdate) => {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  };

  const handleDeletePost = async (postId, token) => {
    console.log("works---->", postId);
    await api.deletePost(postId, token).then((newPost) => {
      const newPosts = posts.filter((e) => e._id !== newPost._id);
      setPosts([...newPosts]);
    });
  };

  const handlePostLike = useCallback(
    (product) => {
      const liked = isLiked(product.likes, currentUser._id);
      return api.changeLikePost(product._id, liked, token).then((newPost) => {
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

  const authRoutes = (
    <>
      <Route
        path="/login"
        element={
          <ModalRegistration
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          >
            <LoginForm setActiveModal={setActiveModal} />
          </ModalRegistration>
        }
      />
      <Route
        path="/registration"
        element={
          <ModalRegistration
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          >
            <RegistrationForm setActiveModal={setActiveModal} />
          </ModalRegistration>
        }
      />
      <Route
        path="/reset-password"
        element={
          <ModalRegistration
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          >
            <ResetPasswordForm setActiveModal={setActiveModal} />
          </ModalRegistration>
        }
      />
    </>
  );

  return (
    <UserContext.Provider
      value={{ user: currentUser, isLoading, isAuth, setCurrentUser }}
    >
      <CardContext.Provider
        value={{
          posts,
          setPosts,
          favourites,
          handleLike: handlePostLike,
          isLoading,
          handleDeletePost,
          currentUser,
          token,
        }}
      >
        {token || isAuth ? (
          <AppHeader
            user={currentUser}
            updateUserHandle={handleUpdataUser}
            setActiveModal={setActiveModal}
          />
        ) : null}

        {token || isAuth ? (
          <main className="main">
            <Routes>
              <Route path="/cards" element={<InfoHeader />} />
            </Routes>

            <section className="main__section">
              <SlideContext.Provider value={{ slide, isLoading, setSlide }}>
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
                        currentUser={currentUser}
                      />
                    }
                  />
                  <Route path="/post/:postId" element={<PostPage />} />
                  <Route path="/favourites" element={<FavouritesPostPage />} />
                  <Route path="/profileform" element={<EditProfileForm />} />
                  <Route
                    path="/profile"
                    element={
                      <ProfilePage
                        slide={slide.length}
                        countLike={countLike}
                        countLikeMe={countLikeMe}
                        countSlide={countSlide}
                        users={users.length}
                      />
                    }
                  />
                  <Route path="*" element={<NotFoundPage />} />
                  {authRoutes}
                </Routes>
              </SlideContext.Provider>
            </section>
          </main>
        ) : (
          <div className={s.notAuth}>
            <video
              poster={poster}
              preload="auto"
              autoplay
              muted
              loop
              class={s.start__video}
              autoPlay="true"
              controls="controls"
            >
              <source type="video/webm" src={videoWebm} />
              <source type="video/mp4" src={videoMp4} />
            </video>
            <div class={s.start__video__back}></div>

            <h2 className={s.textAuth}>Пожалуйста, авторизуйтесь!</h2>
            <Link to="/login" className={s.btnAuth}>
              <span className={s.borderBtn}></span>
              <span className={s.borderBtn}></span>
              <span className={s.borderBtn}></span>
              <span className={s.borderBtn}></span>
              Войти
            </Link>
          </div>
        )}
        <Routes>{authRoutes}</Routes>

        {token || isAuth ? <Footer /> : null}
      </CardContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
