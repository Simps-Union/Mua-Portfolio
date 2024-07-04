import mireille from "../media/me.png"

const AboutMe = () => {
  return (
    <section className="about_Me">
      {/* <div className="skills_container">
        <h1 className="heading">My Expertise</h1>
      </div> */}
      <div id="aboutSectionImage" className="slideInLeft">
        <img src={mireille} alt="me" />
      </div>
      <div className="about_me-content">
        <div className="slideInRight">
          {/* <h1 className="about_me_title">About Me</h1> */}

          <div className="text-slide">
            <h1 className="heading">About Me</h1>
            <div className="text-wrap">
              <div className="text">
                <span className="spanOne">Developer</span>
                <span>Problem Solver</span>
                <span>Collaborative</span>
                <span>Detail-oriented</span>
                <span>Adaptable</span>
              </div>
            </div>
          </div>
          <div className="aboutMeDescription">
            <p>
              I am a passionate full stack web developer on a mission to build
              seamless digital <br /> experiences for users. I specialize in
              translating ideas into clean, efficient code. <br />
              From sleek front-end designs to robust back-end functionality, I
              thrive on creating <br />
              websites that not only look good but also work effortlessly.
            </p>
            <p>
              When I am not in front of my computer, I am usually in the kitchen
              concocting something and learning new recipes, being an assistant
              mother, shopping or crocheting my life away.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
