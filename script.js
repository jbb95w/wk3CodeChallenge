let CarSpeed = prompt("Enter speed (km/h):");
function CheckSpeed() {
    if (CarSpeed <=70) {
        alert("ok");
}
    else {
        let overspeed = CarSpeed -70;
        let points = Math.floor(overspeed / 5);
        if (points >12) {
            alert("License suspended");
        }
        else {
            alert("Points: " + points);
        }
    }

}
CheckSpeed();