import React from "react";
import "./hero.css";

function Hero() {
    return (
        <div className="hero">
            
                <div className="hero-text">
                    <h1 className="hero-title">Energy Saving Calculator</h1>
                    <h3 className="hero-subtitle">Get an estimate of your heating and cooling costs.</h3>
                    <a class="primary_qt_btn" href="#calculator-form"><div id="calculate_button" class="quote_btn" >Calculate</div></a>
                </div>
                <div className="hero-img">
                    <img src="../images/cost.jpg" alt="phone calculator"/>
                </div>
                
           
        </div>
    );
}
export default Hero;