function produceDrivingRange(blockRange){
  return function(a, b){
    const blockDiff = Math.abs(a.slice(0,-2) - b.slice(0,-2))
    if (blockDiff < blockRange){
      return `within range by ${blockRange - blockDiff}`;
    }
    else {
      return `${blockDiff - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage){
  return function(total){
    return total * percentage;
  };
}

function createDriver(){
  let DriverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
