import React, { useState, useEffect } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsTable from './components/ResultsTable';
import roomData from './data/roomData';
import { energyPrices, co2Values } from './data/energyData'; 
import { runningCosts, savingVsRad, energyUsage, co2Reduction } from './utils/calculations';


function Calculator() {
  const [selectedRoomType, setSelectedRoomType] = useState('bathroom');
  const [selectedProjectSize, setSelectedProjectSize] = useState();
  const [email, setEmail] = useState('');
  const [resultsVisible, setResultsVisible] = useState(false);
  const [roomTypeChanged, setRoomTypeChanged] = useState(false);
  const [projectSizeChanged, setProjectSizeChanged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setResultsVisible(true);
    setRoomTypeChanged(true);
    setProjectSizeChanged(true);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };



  
  const updateHeadings = () => {
    const room = roomData[selectedRoomType];
    const roomType = document.getElementById('room-name');
    const runningcostelec = document.getElementById('running-cost-elec');
    const co2emissionselec = document.getElementById('co2-emiss-elec');
    const savingvstraditionalelec = document.getElementById('savings-elec');
    const energyuseelec = document.getElementById('energyuse-elec');
    const runningcostwater = document.getElementById('running-cost-water');
    const co2emissionswater = document.getElementById('co2-emiss-water');
    const savingvstraditionalwater = document.getElementById('savings-water');
    const energyusewater = document.getElementById('energyuse-water');

    roomType.innerHTML = (room.name);
    runningcostelec.innerHTML = '£' + runningCosts(room.elec_watt, selectedProjectSize, energyPrices.elec_price);
    runningcostwater.innerHTML = '£' + runningCosts(room.gas_watt, selectedProjectSize, energyPrices.gas_price);
    co2emissionselec.innerHTML = co2Reduction(room.r_watt, selectedProjectSize, room.elec_watt, energyPrices.elec_price, co2Values.elec_co2);
    co2emissionswater.innerHTML = co2Reduction(room.r_watt, selectedProjectSize, room.gas_watt, energyPrices.gas_price, co2Values.gas_co2);
    savingvstraditionalelec.innerHTML = savingVsRad(room.elec_watt, selectedProjectSize, energyPrices.elec_price, room.r_watt);
    savingvstraditionalwater.innerHTML = savingVsRad(room.gas_watt, selectedProjectSize, energyPrices.gas_price, room.r_watt);
    energyuseelec.innerHTML = energyUsage(room.elec_watt, selectedProjectSize);
    energyusewater.innerHTML = energyUsage(room.gas_watt, selectedProjectSize);
    
  };

  
 useEffect(() => {
  if (resultsVisible && ((roomTypeChanged && selectedProjectSize) || (projectSizeChanged && selectedRoomType))) {
    updateHeadings();
    if (roomTypeChanged) {
      setRoomTypeChanged(false);
    }
    if (projectSizeChanged) {
      setProjectSizeChanged(false);
    }
  }
}, [resultsVisible, roomTypeChanged, selectedProjectSize, projectSizeChanged, selectedRoomType, updateHeadings]);

  return (
    <div>
      <div className="wrapper">
        <div className="input">
          <div className="content">
            <h1><b>Costs Calculator</b></h1>
            <div className="margin-top">
              <CalculatorForm
                selectedRoomType={selectedRoomType}
                setSelectedRoomType={setSelectedRoomType}
                selectedProjectSize={selectedProjectSize}
                setSelectedProjectSize={setSelectedProjectSize}
                email={email}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
                setRoomTypeChanged={setRoomTypeChanged} // Pass the props here
                setProjectSizeChanged={setProjectSizeChanged} // Pass the props here
              />
            </div>
          </div>
        </div>
      </div>
      {resultsVisible && <ResultsTable />}
    </div>
  );
}

export default  Calculator;
