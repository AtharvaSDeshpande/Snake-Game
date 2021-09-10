var canvas = document.getElementById('canvas');
var simulate = new simulation(canvas);
var isStarted = false;
var pressedKey;
// simulate.canvasGrid.drawgrid();
function key(keyCode) {
    pressedKey = keyCode;
    if (!isStarted) {
        isStarted = true;
        start();
    }
    // simulate.computeNextCoordinate(pressedKey);
}
function start() {
    document.getElementById("message").innerHTML = '<h1>Score: &nbsp;</h1><h1 id = "points">0</h1>'
    animate();
}

function  animate(){
    setTimeout(() => {
    simulate.computeNextCoordinate(pressedKey);
    if (simulate.animationIsOn) {
        window.requestAnimationFrame(animate);
    }

}, 150);
    console.log(simulate.snakeCoordinates.length);
    // for (var q = 0; q < 14000; q++)
    //     for (var w = 0; w < 10000; w++)
    //         ;
}    
simulate.drawall();
//# sourceMappingURL=app.js.map