import { Component } from "react";
import "../css/AboutComponent.css";
import { motion } from "framer-motion";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.details);
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="a_row">
            <div className="profile_pic" style={{ padding: "20px" }}>
              <motion.img classname="pro_img"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={this.props.details.profile_image}
                alt="Profile"
                width="80%"
                height="95%"
              />
            </div>
            <motion.div
              className="col-12 col-sm-6"
              style={{
                padding: "25px",
              }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
            >
              <h2 className="about">About</h2>
              <br />
              <h5>{this.props.details.about_me.para1}</h5>
              <p>{this.props.details.about_me.para2}</p>
              <p>{this.props.details.about_me.para3}</p>
              <p>{this.props.details.about_me.para4}</p>
              {/* <button className="Resume" onClick={()=> {<a href="https://drive.google.com/file/d/1H7Unkd62LhKeH0s_o3YXtcJce4_A32yV/view?usp=sharing" />}}>Resume</button> */}
              <a className="Resume" href="https://drive.google.com/file/d/1H7Unkd62LhKeH0s_o3YXtcJce4_A32yV/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
