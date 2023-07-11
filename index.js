// Code your solution in this file!
function distanceFromHqInBlocks(pickup_location) {
    let headquarters_location = 42;
    let distance_in_blocks = Math.abs(pickup_location - headquarters_location)
    return distance_in_blocks ;
}

function distanceFromHqInFeet(pickup_location){
    let distance_in_blocks = distanceFromHqInBlocks(pickup_location)
    let distance_in_feet = distance_in_blocks * 264;
    return distance_in_feet;
}

function distanceTravelledInFeet(start_block, destination_block){
    let distance_in_blocks = Math.abs(destination_block - start_block);
    let distance_in_feet = distance_in_blocks*264;
    return  distance_in_feet;
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
if(distance<= 400){
    return 0;
}else if(distance >400 && distance<= 2000){
    let fare = (distance-400)*0.02;
    return fare;
} else if(distance >2000 && distance <= 2500){
    return 25;
}else{
    return 'cannot travel that far';
}
}