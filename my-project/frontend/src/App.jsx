import "./App.css"
import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import SignUpPage from './pages/SignUp';
// import LoginPage from './pages/Login';
// import SiteHeadingAndNav from './components/SiteHeadingAndNav';
// import NotFoundPage from './pages/NotFound';
// import UserContext from './contexts/current-user-context';
// import { checkForLoggedInUser } from './adapters/auth-adapter';
// import UsersPage from './pages/Users';
// import UserPage from './pages/User';
///
import { Intro } from "./components/Intro"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import AboutMe from "./components/AboutMe"
import MyPortfolio from "./components/Myportfolio"
import Footer from "./components/Footer.jsx"


export default function App() {
  // const { setCurrentUser } = useContext(UserContext);
  // useEffect(() => {
    // checkForLoggedInUser().then(setCurrentUser);
  // }, [setCurrentUser]);

  // return <>
  //   <SiteHeadingAndNav />
  //   <main>
      // <Routes>
      //   <Route path='/' element={<Home />} />
      //   <Route path='/login' element={<LoginPage />} />
      //   <Route path='*' element={<NotFoundPage />} />
      // </Routes>
  //   </main>
  // </>;
  return <>
    <main>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <MyPortfolio/>
      <Footer/>
    </main>
  </>
}

