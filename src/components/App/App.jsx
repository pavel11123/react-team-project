import Footer from "../Footer/Footer";
import AppHeader from "../AppHeader/AppHeader";
import CardList from "../CardList/CardList";
import InfoHeader from "../InfoHeader/InfoHeader";
import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { isLiked } from "../../utils/posts";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import s from "./App.module.css";
import notRegistration from "./image/images.jpg";

function App() {
  const [posts, setPosts] = useState([]);
  const [slide, setSlide] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [page, setPage] = useState(1);
  const [countPagination, setCountPagination] = useState(10);

  const [activeModal, setActiveModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getPostsList(page), api.getSlide()])
      .then(([userData, postData, slideData]) => {
        setCurrentUser(userData);
        setPosts(postData.posts);
        setSlide(slideData);
        const favouritesPosts = slideData.filter((item) =>
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
    (product) => {
      const liked = isLiked(product.likes, currentUser._id);
      return api.changeLikePost(product._id, liked).then((newPost) => {
        const newPosts = posts.map((post) => {
          return post._id === newPost._id ? newPost : post;
        });

        if (!liked) {
          setFavourites(prevState => [...prevState, newPost]);
        } else {
          setFavourites(prevState =>
            prevState.filter(post => post._id !== newPost._id)
          );
        }

        setPosts(newPosts);
        return newPost;
      });
    },
    [posts, currentUser]
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=> {
    const token = localStorage.getItem('token');
    console.log({ token });
    console.log({ location });
    // const authPath = ['/reset-password', '/registration']
    if(token) {
      setIsAuth(true);
    } 
    // нельзя войти без регистрации
    // else if (!authPath.includes(location.pathname)){
    //   navigate('/login');
    // }
  }, [navigate]);

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
        <AppHeader user={currentUser} updateUserHandle={handleUpdataUser} setActiveModal={setActiveModal}/>

        {isAuth ? 
        <main className="main">
          <Routes>
            <Route path="/cards" element={<InfoHeader />} />
          </Routes>

          <section className="main__section">
            <SlideContext.Provider value={{ slide }}>
              <Routes>
                <Route index element={<HomePage/>} />
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
                <Route path="*" element={<NotFoundPage />} />
                <Route 
                  path="/registration" 
                  element={
                  <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
                    <RegistrationForm setActiveModal={setActiveModal}/>
                  </ModalRegistration>
                }
                />
                <Route 
                  path="/login" 
                  element={
                  <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
                    <LoginForm setActiveModal={setActiveModal}/>
                  </ModalRegistration>
                }
                />
                <Route 
                  path="/reset-password" 
                  element={
                  <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
                    <ResetPasswordForm />
                  </ModalRegistration>
                }
                />
              </Routes>
            </SlideContext.Provider>
          </section>
        </main>
        :
        <div className={s.notAuth}>Пожалуйста, авторизуйтесь!
          <img src={notRegistration} className={s.img} alt="Пожалуйста, авторизуйтесь!" /> 
        <Routes>
          <Route 
            path="/registration" 
            element={
            <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
              <RegistrationForm setActiveModal={setActiveModal}/>
            </ModalRegistration>
                }
          />
          <Route 
            path="/login" 
            element={
            <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
              <LoginForm setActiveModal={setActiveModal}/>
            </ModalRegistration>
                }
          />
          <Route 
            path="/reset-password" 
            element={
            <ModalRegistration activeModal={activeModal} setActiveModal={setActiveModal}>
                <ResetPasswordForm />
            </ModalRegistration>
                }
          />
          </Routes>
        </div>
        }
        <Footer />
      </CardContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
