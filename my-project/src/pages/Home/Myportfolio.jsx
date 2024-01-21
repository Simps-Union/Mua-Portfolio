import kenziecart from "../../images/kenziecart.png"
import snippets from "../../images/snippets.png"
import newsOutlet from "../../images/newsoutlet.png"

const MyPortfolio = () => {
  return (
    <section className="portfolio_section">
      <div className="portfolio_container">
        <div className="portfolio_content">
          <h1 className="portfolio_heading">Recent Projects</h1>
        </div>
        <div className="projects">
          <div className="portfolio_images">
            <img className="portfolio_pieces" src={kenziecart} alt="project 1" />
            <div>Kenzie Cart</div>
          </div>
          <div>
            <img className="portfolio_pieces" src={snippets} alt="project 2" />
            <div>Snippets</div>
          </div>
          <div>
            <img className="portfolio_pieces" src={newsOutlet} alt="project 2" />
            <div>News Outlet</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyPortfolio
