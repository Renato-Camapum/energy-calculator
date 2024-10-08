import React from "react";

function ResultsTable() {
  return (
    <div className="output">
      <div className="content">
        <div id="output-results">
          <table className="styled-table">
            <tr>
              <th className="thead_1">
                <h2 id="room-name">Room name</h2>
              </th>
              <th className="thead_2">
                <h2>Electric</h2>
              </th>
              <th className="thead_3">
                <h2>Water</h2>
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
                <div className="result-list"><img className="icon" src="../icons/eco.svg" alt="eco icon"/><h3>Reduction in annual CO2 emissions</h3></div>
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
                <div className="result-list"><img className="icon" src="../icons/saves.svg" alt="saving icon"/><h3>Saving vs. radiator (per year)</h3></div>
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
                <td className="quote-space"></td>
                <td className="quote-btn-data">
                  <a
                    className="quote_btn" target="_blank"
                    href="https://tools.warmup.co.uk/quick-quote-form"
                  >
                    Get Electric Quote
                  </a>
                </td>
                <td className="quote-btn-data1">
                  <a
                    className="quote_btn" target="_blank"
                    href="https://pro.warmup.co.uk/hydro-sqq-form/?new_quote=1"
                  >
                    Get Water Quote
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
    </div>
  );
}
export default ResultsTable;
