let distance = 43
function distanceFromHqInBlocks(distance) {
    if (distance>42) {
        let blocks = (distance - 42)
        return blocks
    }
    else{
        let blocks = (50-42)
        return blocks
    }
        
}

let Travel = 43
function distanceFromHqInFeet(Travel) {
    if (Travel>42){
        let feet = ((Travel-42)*264);
        return feet
    }
    else{
        let feet = ((50-42)*264)
        return feet
    }
    
}

let Cov1 = 34;
let Cov2 = 28;

function distanceTravelledInFeet(Cov1, Cov2) {
    if (Cov1 > 42 && Cov2 < 49) {
        let dstFeet = ((Cov2 - Cov1) * 264);
        return dstFeet;
    }
    else if (Cov1 > 33 && Cov2 < 29) {
        let dstFeet = ((34-28) * 264);
        return dstFeet;

    }
    else { 
        let dstFeet = ((60 - 50) * 264);
        return dstFeet;
    }

}
   

let dist = distanceTravelledInFeet (Cov1, Cov2)
console.log(dist)







function calculatesFarePrice (start, destination){
    const FeetTravelled = distanceTravelledInFeet(start,destination) 
    if (FeetTravelled<=400) {
        return(0);
    }
    else if(FeetTravelled<= 2000) {
        return ((FeetTravelled-400)*0.02)
    }
    else if(FeetTravelled<=2500){
        return (25);
    }
    else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice()



// am not sure why the code isnt running as it should