import linkedIn from "../media/linkedinIcon.png"
import github from "../media/githubIcon.png"
import email from "../media/emailIcon.png"

const Contact = () => {
  return (
    <section id="contact"  className="contactSection">
      <div className="contactContainer">
        <div className="contactIcons">
          <a href="https://www.linkedin.com/in/mireille-mua-79698829a/">
            <img className="logos" src={linkedIn} alt="linkedIn icon" />
          </a>

          <a href="https://github.com/">
            <img className="logos" src={github} alt="Github icon" />
          </a>
          <a className="" href="mailto:mireillemua1@gmail.com">
            <img className="logos" src={email} alt="" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
