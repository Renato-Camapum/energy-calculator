import React from "react";

function Footer() {
    return (
        <div className="footer">
             <h4>
            *Running costs are estimates based on building standards and
            Warmup's own testing. For full details click here*
          </h4>
          <h4>
            Powered by{" "}
            <a
              className="footer_link"
              href="https://www.warmup.co.uk/underfloor-heating"
            >
              Warmup PLC
            </a>
          </h4>
        </div>
    );
}

export default Footer;