import kenziecart from "../media/kenziecart.png"
import snippets from "../media//snippets.png"
import newsOutlet from "../media/newsoutlet.png"

const MyPortfolio = () => {
  return (
    <section className="portfolio_section">
      <div className="portfolio_container">
        <div className="portfolio_content">
          <h1 className="portfolio_heading">Recent Projects</h1>
        </div>
        <div className="projects">
          <div className="project_card">
            <img
              className="portfolio_pieces"
              src={kenziecart}
              alt="project 1"
            />
            <h3 className="project_name">Kenzie Cart</h3>
            <p>
              This is an ecomerce website for both US customers and European
              customers.
              <br />
              Customers can switch between the dollar sign and the euro sign
              depending <br />
              on their location and what is most convenient for them.
            </p>

            <a  target="_blank" rel="noopener" href="http://localhost:3000/">Learn More Here</a>
          </div>
          <div className="project_card">
            <img className="portfolio_pieces" src={snippets} alt="project 2" />
            <h3 className="project_name">Snippets</h3>
            <p>
              Snippets is a the Kenzie Academy version of twitter. Where
              students can communicate with each other
              <br />
              with the available aption to sign in as a existing user or to
              register as a new user also giving
              <br />
              the new users the option to pick a avatar during their
              registration process. depending <br />
            </p>
            <a  target="_blank" rel="noopener" href="http://localhost:5177/">Learn More Here</a>
          </div>

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
            <a  target="_blank" rel="noopener" href="http://localhost:5176/">Learn More Here</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPortfolio
