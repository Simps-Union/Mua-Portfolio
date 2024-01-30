import personal_image from "../media//about.png"

export const Intro = () =>{
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
              <p className="personal_info_description">
                {/* I fancy the idea of building things from scratch
                <br />So I spend most of my time working on projects.
                <br /> If I'm not in front of my computer, I'm either in the 
                <br /> kitchen concocting something and learning new recipes,
                <br />being an assistant mother or crocheting my life away */}

              </p>
            </div>
            <button className="contact_btn">
              <a className="contact_btn" href="mailto:mireillemua1@gmail.com">
                Contact Me
              </a>
            </button>
          </div>
          <div className="personal_image">
            <img className= "personal_img" src={personal_image} alt="" />
          </div>
        </section>
      )
}