import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/JS.png"
import react from "../../images/react.png"

const Skills = () => {
  return (
    <section className="skills_section">
      <div className="skills_container">
        <h1 className="heading">My Expertise</h1>
      </div>
      <div className="skills_section_container">
        <div className="skill_card">
          <img src={html} alt="" />
          <h3 className="skills_heading">HTML</h3>
          <p className="skill_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Nihil quae obcaecati debitis est, aliquam at accusantium cupiditate
            <br />
            temporibus facilis nemo. Aut nobis dicta aperiam deleniti facilis
            veniam
            <br />
            aliquam illo molestiae?
          </p>
        </div>
        <div className="skill_card">
          <img src={css} alt="" />
          <h3 className="skills_heading">CSS</h3>

          <p className="skill_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Nihil quae obcaecati debitis est, aliquam at accusantium cupiditate
            <br />
            temporibus facilis nemo. Aut nobis dicta aperiam deleniti facilis
            veniam
            <br />
            aliquam illo molestiae?
          </p>
        </div>

        <div className="skill_card">
          <img src={js} alt="" />
          <h3 className="skills_heading">JavaScript</h3>

          <p className="skill_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Nihil quae obcaecati debitis est, aliquam at accusantium cupiditate
            <br />
            temporibus facilis nemo. Aut nobis dicta aperiam deleniti facilis
            veniam
            <br />
            aliquam illo molestiae?
          </p>
        </div>

        <div className="skill_card">
          <img src={react} alt="" />
          <h3 className="skills_heading">React</h3>

          <p className="skill_description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Nihil quae obcaecati debitis est, aliquam at accusantium cupiditate
            <br />
            temporibus facilis nemo. Aut nobis dicta aperiam deleniti facilis
            veniam
            <br />
            aliquam illo molestiae?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
