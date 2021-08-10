// Code your solution in this file!
let distBlocksHq;

function distanceFromHqInBlocks(pickUp){
    distBlocksHq = Math.abs(42-pickUp) ;
    return distBlocksHq;
}

console.log(distanceFromHqInBlocks(50));


let distFeetHq;

function distanceFromHqInFeet(pickUp){
    distFeetHq = (distanceFromHqInBlocks(pickUp) * 264);
    return distFeetHq;
}

console.log(distanceFromHqInFeet(50));


let distTravelledInFt;
function distanceTravelledInFeet(startLoc, endLoc){
    distTravelledInFt = ((Math.abs(startLoc - endLoc)) * 264);
    return distTravelledInFt;
}

console.log(distanceTravelledInFeet(34, 38));


let fare;
function calculatesFarePrice(startLoc, endLoc){
    let feet = distanceTravelledInFeet(startLoc,endLoc);
    if(feet <= 400){
        fare = 0;  

    }else if(feet > 400 && feet <= 2000){
        fare = ((feet - 400) * 0.02);
        fare = fare.toFixed(2);
        fare = Number.parseFloat(fare);

    }else if(feet> 2000 && feet <= 2500){
        fare = 25; 

    }else{
        fare = "cannot travel that far";
        
    }
    return fare;
}

console.log(calculatesFarePrice(31,32));
console.log(calculatesFarePrice(34,38));
console.log(calculatesFarePrice(34,42));
console.log(calculatesFarePrice(20,50));