import mireille from "../../images/me.png"

const AboutMe = () => {
  return (
    <section className="about_Me">
      <div className="aboutSectionImage">
        <img src={mireille} alt="me" />
      </div>
      <div className="about_me-content">
        <div className="aboutMeItems">
          <p className="about_title"></p>
          <h1 className="about_me_title">About Me</h1>
          <p className="aboutMeDescription">
            I fancy the idea of building things from scratch
            <br />
            So I spend most of my time working on projects.
             If I'm not in front of my computer, I'm either in the
             kitchen concocting something <br />and learning new recipes,
            being an assistant mother or crocheting my life away
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum exercitationem eaque incidunt necessitatibus dolorem minima, 
            modi fugiat repellendus, deserunt id illo? Tempora similique laboriosam molestiae non dolorum eaque eius pariatur.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
