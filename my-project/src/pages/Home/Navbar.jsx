import { useState, useEffect } from "react"
// import { Link } from "react-scroll"

const Navbar = () => {
  const [navActive, setNavActive] = useState(false)
  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closedMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closedMenu()
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closedMenu()
    }
  }, [])

  return (
    <nav className="navbar">
      <a className="title" href="/">
        HOME
      </a>
      <div className="menu">
        <ul className="menuItems">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )

  //   return (
  //     <nav className={`navbar ${navActive ? "active" : ""}`}>
  //       <div>HOME</div>
  //       <a
  //         className={`nav_hamburger ${navActive ? "active" : ""}`}
  //         onClick={toggleNav}
  //       >
  //         <span className="nav_hamburger_line"></span>
  //         <span className="nav_hamburger_line"></span>
  //         <span className="nav_hamburger_line"></span>
  //       </a>
  //       <div className={`navbarItems ${navActive ? "active" : ""}`}>
  //         <ul className="menuItens">
  //         <li>
  //             <a href="#about">ABOUT</a>
  //           </li>
  //           <li>
  //             <a href="#portfolio">PORTFOLIO</a>
  //           </li>
  //           <li>
  //             <a href="#contact">CONTACT</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //   )
}

export default Navbar
