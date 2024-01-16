import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Intro } from "./pages/Home/Intro"
import Navbar from "./pages/Home/Navbar"

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Intro/>}/>
              <Route/>
            </Routes>
          </div>
        </Router>
      </div>
      {/* <div>
      <Intro/>
    </div>
     */}
    </>
  )
}

export default App
