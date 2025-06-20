import React from "react";
import './home.css'
import androidStudio from '../assets/images/android_studio_image.png'
import kotlinImage from '../assets/images/kotlin_image.png' 
import iphoneImage from '../assets/images/first_iphone_picture.png'
import reactNative from '../assets/images/react_native_image.png'
import iphoneImageTwo from '../assets/images/iphone_image_no_2.png'
import gradientBackground from '../assets/svgs/gradient.svg'

function Home() {
  return (
    <>
      <div className="section">
        <div className="firstSection">
          <img
            id="iphone_example"
            src={iphoneImage}
            alt="image of iphone"
          />
          <div className="firstSection_left">
            <p className="firstsection_text">
              Creating applications to the industry standard involves following
              best practices in software design, development, and deployment.
              Thorough testing, version control, and adherence to user
              experience principles are also key elements in delivering reliable
              and professional-grade software.
            </p>
            <img src={kotlinImage} alt="image of kotlin" />
            <img src={androidStudio} alt="image of android studio" />
            <img src={reactNative} alt="image of react native" />
          </div>
        </div>
      </div>

      <div className="section" style={{ backgroundImage: `url(${gradientBackground})` }}>
  <div className="secondSection_left">

    <p className="secondSection_text">
      Bringing any wacky ideas the customer has in mind to life — whether it's
      an app to track employees or a simple calculator, I can build it for you.
    </p>
    <div className="getStartedBtn">
      <p className="secondSection_btn_txt">Get Started</p>
    </div>
  </div>

  <div className="secondSection_right">
    <img
      id="iphone_example_two"
      src={iphoneImageTwo}
      alt="image of iphone"
    />
    </div>
</div>
    </>
  );
}

export default Home;
