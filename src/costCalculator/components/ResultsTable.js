import React from "react";

function ResultsTable() {
  return (
    <div className="output">
      <div className="content">
        <div id="output-results">
          <table className="styled-table">
            <tr>
              <th>
                <h2 id="room-name">Room name</h2>
              </th>
              <th>
                <h2>Electric Underfloor Heating</h2>
              </th>
              <th>
                <h2>Water Underfloor Heating</h2>
              </th>
            </tr>
            <tbody>
              <tr>
                <td >
                <div className="result-list"><img className="icon" src="../icons/cost.svg" alt="costs icon"/><h3>Typical Running Costs (per year)</h3></div>
                </td>
                <td>
                <h3 id="running-cost-elec" className="cost-value">
                    0
                  </h3>
                </td>
                <td>
                <h3 id="running-cost-water" className="cost-value">
                    0
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                <div className="result-list"><img className="icon" src="../icons/eco.svg" alt="eco icon"/><h3>Reduction in annual CO2 emissions (kg)</h3></div>
                </td>
                <td>
                  <h3 id="co2-emiss-elec" className="cost-value"></h3>
                </td>
                <td>
                  <h3 id="co2-emiss-water" className="cost-value"></h3>
                </td>
              </tr>
              <tr>
                <td >
                <div className="result-list"><img className="icon" src="../icons/saves.svg" alt="saving icon"/><h3>Saving vs. traditional radiator system (per year)</h3></div>
                </td>
                <td>
                  <h3 id="savings-elec" className="cost-value">
                    £234
                  </h3>
                </td>
                <td>
                  <h3 id="savings-water" className="cost-value">
                    £123
                  </h3>
                </td>
              </tr>
              <tr id="energy-use-row">
                <td >
                <div className="result-list"><img className="icon" src="../icons/energy.svg" alt="energy icon"/><h3>Estimated annual energy use (kWh)</h3></div>
                </td>
                <td>
                  <h3 id="energyuse-elec" className="cost-value"></h3>
                </td>
                <td>
                  <h3 id="energyuse-water" className="cost-value"></h3>
                </td>
              </tr>
              <tr id="quote-btn-row">
                <td></td>
                <td className="quote-btn-data">
                  <a
                    className="quote_btn"
                    href="https://tools.warmup.co.uk/quick-quote-form"
                  >
                    Get Electric Quote
                  </a>
                </td>
                <td className="quote-btn-data">
                  <a
                    className="quote_btn"
                    href="https://pro.warmup.co.uk/hydro-sqq-form/?new_quote=1"
                  >
                    Get Water Quote
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
      </div>
    </div>
  );
}
export default ResultsTable;
