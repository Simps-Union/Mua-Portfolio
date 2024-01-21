import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Intro } from "./pages/Home/Intro"
import Navbar from "./pages/Home/Navbar"
import Skills from "./pages/Home/Skills"
import AboutMe from "./pages/Home/AboutMe"
import MyPortfolio from "./pages/Home/Myportfolio"

function App() {
  return (
    <>
      {/* <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Intro/>}/>
              <Route path="/" element={<Skills/>}/>
              <Route/>
            </Routes>
          </div>
        </Router>
      </div> */}
      <div>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <MyPortfolio/>
    </div>
    
    </>
  )
}

export default App
