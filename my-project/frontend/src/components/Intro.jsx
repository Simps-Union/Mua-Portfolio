import personal_image from "../media//about.png"
import resume from "../media/resume.pdf"


export const Intro = () => {
  return (
    <section id="personal_info" className="personal_section">
      <div className="personal_content">
        <div className="personal_info_content">
          <p className="infoTitle">Hello, I'm Mireille</p>
          <h1 className="personalInfoTitle">
            <span>Full Stack</span>
            {""}
            <br />
            Developer
          </h1>
          
        </div>
        <button className="resume_btn">
          <a className="resume_btn" target="_blank" rel="noopener" href={resume}>
            RESUME
          </a>
        </button>
      </div>
      <div className="personal_image">
        <img className="personal_img" src={personal_image} alt="" />
      </div>
    </section>
  )
}
