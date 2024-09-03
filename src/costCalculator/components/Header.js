import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="header">
			<span class="site-logo-img">
                <a href="https://www.warmup.co.uk/" class="custom-logo-link" rel="home" aria-current="page">
                    <img width="120" height="40" src="https://www.warmup.co.uk/wp-content/uploads/cropped-Warmup-Logo-LARGE-120x40.png" class="custom-logo" alt="Warmup" decoding="async" srcset="https://www.warmup.co.uk/wp-content/uploads/cropped-Warmup-Logo-LARGE-120x40.png 120w, https://www.warmup.co.uk/wp-content/uploads/cropped-Warmup-Logo-LARGE.png 300w" sizes="(max-width: 120px) 100vw, 120px"></img>
                </a>
            </span>
            <div id="quoteButton" class="quote_btn" ><a class="primary_qt_btn">GET A QUOTE</a></div>
		</div>
    );
}

export default Header;