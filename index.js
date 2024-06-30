// Code your solution in this file!
// Returns the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(someValue) {
    let distance;
    if (someValue > 42) {
        return distance = someValue - 42;
    } else {
        return distance = 42 - someValue;
    }
}

console.log(distanceFromHqInBlocks(50));

// Returns the number of feet from Scuber's headquarters to the pickup location
function distanceFromHqInFeet(someValue) {
    const distance = distanceFromHqInBlocks(someValue);
    return distance * 264;
}

console.log(distanceFromHqInFeet(50));

//returns the number of feet traveled
function distanceTravelledInFeet(start, destination) {
    let distance;

    if (start > destination) {
        distance = start - destination;
        distance *= 264;
        return distance;
    } else {
        distance = destination - start;
        distance *= 264;
        return distance;
    }
}

//returns the fare for the customer
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    let fare;
    if (distance <= 400) {
        return fare = 0;
    } else if (distance > 400 && distance < 2000 ) {
        let reduceDistance = distance - 400;
        return fare = reduceDistance * 0.02;
    } else if ( distance >= 2000) {
        if (distance > 2500) {
            return "cannot travel that far";
        }
        return fare = 25;
    }
}