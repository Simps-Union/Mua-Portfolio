import personal_image from "../../images/about.png"

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
                I enjoy coding in my free time. (Not really) I just do it because
                they say this field pays well. We are trying to live that luxury
                <br />life out here.
                
                I cannot wait to hear "yeah my daughter is a software developer" "My
                girlfriend works for Spotify, Google, and all😊"
                <br /> Plus yes I am trying get into tech but I'm just a bit slow but
                not to worry I will get there with God on my side.
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