import "./App.css"
import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
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
import { Example } from "./components/Example"

export default function App() {
  // const { setCurrentUser } = useContext(UserContext);
  // useEffect(() => {
  // checkForLoggedInUser().then(setCurrentUser);
  // }, [setCurrentUser]);

  // return <>
  //   <SiteHeadingAndNav />
  //   <main>

  //   </main>
  // </>;
  return (
    <>
      <main>
        <Navbar />
        <Intro />
        <AboutMe />
        {/* <Example /> */}
        {/* <Skills /> */}
        <MyPortfolio />
        <Footer />
      </main>
      {/* <Routes>
        <Route path="/" element={<Example />} />
        <Route path='/login' element={<LoginPage />} />
    <Route path='*' element={<NotFoundPage />} />
      </Routes> */}
    </>
  )
}

// -Instead of having a myskills section, have the skills be listed in the projects
// (each project should point out what was used to build it.)
// -Have an unordered list of what was used to build the site
// and also a github button to the project and a "learn more button"

// -In the about me section find a way to animate between
// technical and soft/hard skills that you have but as adjectives.

// -Find out how to fork the projects because they's currently not working none of the sites are functioning.

// -Finish animating the other sections.
