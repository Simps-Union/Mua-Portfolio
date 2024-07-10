import "./App.css"
import { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { Intro } from "./components/Intro"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import MyPortfolio from "./components/Myportfolio"
import Contact from "./components/ContactMe.jsx"
import ProjectCarousels from "./components/PortfolioSliders"
import snippets from "./media/snippets.png"
import snippetComment from "./media/snippetComment.png"
import snippetsProfile from "./media/snippetsProfile.png"
import snippetsChat from "./media/snippetsChat.png"
import newsOutletHome from "./media/newsOutletHome.png"
import newsOutletNews from "./media/newsOutletNews.png"
import newsOutletStocks from "./media/newsOutletStocks.png"
import newsOutletSports from "./media/newsOutletSports.png"
import newsOutletLocation from "./media/newsOutletLocation.png"
import newsOutletWeather from "./media/newsOutletWeather.png"
import newsOutletSignIn from "./media/newsOutletSignIn.png"

export default function App() {
  return (
    <>
      <main>
        <Navbar />

        <Routes>
          <Route
            path="/Snippets"
            element={
              <ProjectCarousels
                img1={snippets}
                img2={snippetsChat}
                img3={snippetComment}
                img4={snippetsProfile}
              />
            }
          />
          <Route
            path="/"
            element={
              <>
                <Intro /> <AboutMe /> <MyPortfolio />{" "}
              </>
            }
          ></Route>
          <Route
            path="/News Outlet"
            element={
              <ProjectCarousels
                img1={newsOutletHome}
                img2={newsOutletNews}
                img3={newsOutletStocks}
                img4={newsOutletSports}
                img5={newsOutletLocation}
                img6={newsOutletWeather}
                img7={newsOutletSignIn}
              />
            }
          ></Route>
        </Routes>
        <Contact />
      </main>
    </>
  )
}

