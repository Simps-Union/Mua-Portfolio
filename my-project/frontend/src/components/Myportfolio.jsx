import kenziecart from "../media/kenziecart.png"
import snippets from "../media/snippets.png"
import newsOutlet from "../media/newsoutlet.png"
import kenzieHigh from "../media/kenzieHigh.png"
import html from "../media/html.png"
import css from "../media/css.png"
import js from "../media/JS.png"
import react from "../media/react.png"
import mongodb from "../media/mongodb.png"
import node from "../media/nodejs-2.svg"

const MyPortfolio = () => {
  return (
    <section className="portfolio_section">
      <div className="portfolio_container">
        <div className="portfolio_content">
          <h1 className="portfolio_heading">Recent Projects</h1>
        </div>
        <div className="projects">
          <div id="container" className="slideInLeft">
            <div className="project_card">
              <img
                // id="special_image"
                className="portfolio_pieces"
                src={kenziecart}
                alt="project 1"
              />
              <h3 className="project_description">Kenzie Cart</h3>
              <p className="project_description">
                This is an ecomerce website for both US customers and European
                customers.
                <br />
                Customers can switch between the dollar sign and the euro sign
                depending <br />
                on their location and what is most convenient for them.
              </p>

              <div className="popup_text">
                <a
                  target="_blank"
                  rel="noopener"
                  className="github"
                  href="https://github.com/mireille272/Kenzie-Cart"
                >
                  Github
                </a>
                <ul className="list">
                  <div>
                    <li>React</li>
                    <img className="skill-icons" src={react} alt="" />
                  </div>
                  <div>
                    <li>HTML</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                  <div>
                    <li>CSS</li>

                    <img className="skill-icons" src={css} alt="" />
                  </div>
                  <div>
                    <li>NodeJS</li>

                    <img className="skill-icons" src={node} alt="" />
                  </div>
                  <div>
                    <li>MongoDB</li>

                    <img className="skill-icons" src={mongodb} alt="" />
                  </div>
                  <div>
                    <li>Express</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                </ul>
                <button className="learnMore-button">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://kenzie-cart-clien-t-updates.onrender.com"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div id="container" className="slideInRight">
            <div className="project_card">
              <img
                className="portfolio_pieces"
                src={kenzieHigh}
                alt="project 2"
              />
              <h3 className="project_name">Kenzie High Gradebook</h3>
              <p>
                Kenzie High Gradebook is a gradebook for a JavaScript class
                <br />
                The book allows the teacher to add students to class, add
                assignment, adjust grades, etc
              </p>

              <div className="popup_text">
                <a
                  target="_blank"
                  rel="noopener"
                  className="github"
                  href="https://github.com/mireille272/Gradebook"
                >
                  Github
                </a>
                <ul className="list">
                  <div>
                    <li>HTML</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                  <div>
                    <li>CSS</li>
                    <img className="skill-icons" src={css} alt="" />
                  </div>

                  <div>
                    <li>JavaScript</li>

                    <img className="skill-icons" src={js} alt="" />
                  </div>
                </ul>
                <button className="learnMore-button">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://mireille272.github.io/Gradebook/"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div id="container" className="slideInLeft">
            <div className="project_card">
                <img
                  className="portfolio_pieces"
                  src={snippets}
                  alt="project 3"
                />

              <h3 className="project_name">Snippets</h3>
              <p>
                Snippets is a the Kenzie Academy version of twitter. Where
                students can communicate with each other
                <br />
                with the available option to sign in as a existing user or to
                register as a now user also giving
                <br />
                the new users the option to pick a avatar during their
                registration process. depending <br />
              </p>

              <div className="popup_text">
                <a
                  target="_blank"
                  rel="noopener"
                  className="github"
                  href="https://github.com/mireille272/Snippets"
                >
                  Github
                </a>
                <ul className="list">
                  <div>
                    <li>React</li>
                    <img className="skill-icons" src={react} alt="" />
                  </div>
                  <div>
                    <li>HTML</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                  <div>
                    <li>CSS</li>

                    <img className="skill-icons" src={css} alt="" />
                  </div>
                  <div>
                    <li>NodeJS</li>

                    <img className="skill-icons" src={node} alt="" />
                  </div>
                  <div>
                    <li>MongoDB</li>

                    <img className="skill-icons" src={mongodb} alt="" />
                  </div>
                  <div>
                    <li>Express</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                </ul>
                <button className="learnMore-button">
                  <a
                    href="/Snippets"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div id="container" className="slideInRight">
            <div className="project_card">
              <img
                className="portfolio_pieces"
                src={newsOutlet}
                alt="project 1"
              />

              <h3 className="project_name">News Outlet</h3>
              <p>
                News Outlet is a news site which provides the user with local,
                national, and world news
                <br />
                For the use'r convenience, they have the ability to access their
                local weather and also search
                <br />
                up the weather forecast of any location of their choice with
                either the zip codes or the country name.
                <br />
                The user aso have the ability to keep track of their favorite
                sports team on the site with the option to
                <br />
                either log in as an existing user or create an account as a new
                user.
              </p>
              <div className="popup_text">
                <a
                  target="_blank"
                  rel="noopener"
                  className="github"
                  href="https://github.com/Reynolds1121/capstone-newsoutlet"
                >
                  Github
                </a>
                <ul className="list">
                  <div>
                    <li>React</li>
                    <img className="skill-icons" src={react} alt="" />
                  </div>
                  <div>
                    <li>HTML</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                  <div>
                    <li>CSS</li>

                    <img className="skill-icons" src={css} alt="" />
                  </div>
                  <div>
                    <li>NodeJS</li>

                    <img className="skill-icons" src={node} alt="" />
                  </div>
                  <div>
                    <li>MongoDB</li>

                    <img className="skill-icons" src={mongodb} alt="" />
                  </div>
                  <div>
                    <li>Express</li>

                    <img className="skill-icons" src={html} alt="" />
                  </div>
                </ul>
                <button className="learnMore-button">
                  <a
                    href="/News Outlet"
                  >
                    Learn More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPortfolio
