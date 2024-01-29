import linkedIn from "../../images/linkedinIcon.png"
import github from "../../images/githubIcon.png"

const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="icons">
          <a href="https://www.linkedin.com/in/mireille-mua-79698829a/">
            <img className="logos" src={linkedIn} alt="linkedIn icon" />
          </a>

          <a href="https://github.com/">
            <img className="logos" src={github} alt="Github icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
