import React from "react";
import "./hero.css";

function Hero() {
    return (
        <div className="hero">
            
                <div className="hero-text">
                    <h1 className="hero-title">Energy Saving Calculator</h1>
                    <h3 className="hero-subtitle">Get an estimate of your heating and cooling costs.</h3>
                    {/* <div id="calculate_button" class="quote_btn" ><a class="primary_qt_btn">Calculate</a></div> */}
                </div>
                <div className="hero-img">
                    <img src="../images/cost.jpg" alt="phone calculator"/>
                </div>
                
           
        </div>
    );
}
export default Hero;