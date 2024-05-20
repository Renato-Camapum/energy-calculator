const energyPrices = {
    elec_price: 0.245,
    gas_price: 0.07,
  };
  
  const co2Values = {
    elec_co2: 0.19338,
    gas_co2: 0.20227,
  };
  
  function runningCosts(watt, size, price) {
    return (watt * size * price).toFixed(2);
  }
  
  
  function savingVsRad(watt, size, cost, r_watt, gas_cost) {
    // console.log(watt);
    // console.log(size);
    // console.log(cost);
    
    const saving = (r_watt * size * gas_cost) - (watt * size * cost);
    console.log(saving);
    return saving < 0 ? '' : `£${saving.toFixed(2)}`;
  }
  

  function energyUsage(watt, size) {
    
    const usedEnergy = (watt * size).toFixed(0);
    
    return usedEnergy;
    
  }


  

  function co2Reduction(watt_r, size, watt, co2, r_co2) {
    console.log(watt_r * size *  r_co2);
    console.log(watt * size *  co2);
    const co2red =
      (watt_r * size * r_co2) - (watt * size *  co2);
    return co2red < 0 ? '' : co2red.toFixed(1);
  }
  
  export { energyPrices, co2Values, runningCosts, savingVsRad, energyUsage, co2Reduction };
  