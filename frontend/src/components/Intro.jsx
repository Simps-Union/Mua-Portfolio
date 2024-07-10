import personal_image from "../media//about.png"
import Resume from "../media/Resume .pdf"


export const Intro = () => {
  return (
    <section id="personal_info" className="slideInLeft">
      <div id="personal_content" className="slideInLeft">
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
          <a className="resume_btn" target="_blank" rel="noopener" href={Resume}>
            RESUME
          </a>
        </button>
        {/* <p>It Take a lot of hard work to create something simple. Steve Jobs </p> */}
      </div>
      <div id="personal_image" className="slideInRight">
        <img className="personal_img" src={personal_image} alt="" />
      </div>
    </section>
  )
}
