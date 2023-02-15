import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G Letter" />
    </div>
    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about spoon" className="spoon_img" />
        <p className="p__opsensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit deleniti delectus quos facilis nesciunt maiores ex molestiae.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="history spoon" className="spoon_img" />
        <p className="p__opsensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit deleniti delectus quos facilis nesciunt maiores ex molestiae.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
