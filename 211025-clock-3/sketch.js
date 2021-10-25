// endless array iteration.

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let steps = 60

let hoursMax = 24
let minsMax = 60
let secsMax = 60
let hsecsMax = 100

let nGrids = 4

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)
    frameRate(30)
    //actual code starts here

}

// p5 Draw
function draw() {
    background(255)
    translate(width/2,height/2)
    rotate(PI)

    let now = new Date()
    let time = {
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
        msec: now.getMilliseconds()
    }

    strokeWeight(9)

    // aSec = 0
    let center = createVector(0,0)
    stroke(0)
    point(center)

    let aMin = -time.min * TAU / 60
    let pMin = createVector(sin(aMin) * width/2,cos(aMin) * height/2)
    point(pMin)

    let aSec = -time.sec * TAU / 60
    // let pSec = createVector(sin(aSec) * width/2,cos(aSec) * height/2)

    let xSec
    let ySec
    if ((aSec < -QUARTER_PI && aSec > -3 * QUARTER_PI) || (aSec < -5 * QUARTER_PI) && (aSec > -7 * QUARTER_PI)) {
        xSec = width/2 
        ySec = (width/2 * tan(aSec))
        stroke(0,255,0)
    } else {
        stroke(0)
        xSec = 0
        ySec = 0
    }
    // let pSec = createVector(xSec, ySec)
    let pSec = createVector(sin(aSec) * width/2,cos(aSec) * height/2)
    point(pSec)

    console.log('aMin: '+aMin+', aSec: '+aSec)

}

       // 1 and 3           (X0,Y0)      (X0 + a/2 , (a/2 * Tan(φ))+ Y0
       // 2 and 4           (X0,Y0)      (X0 + b/(2* Tan(φ)) , b/2 + Y0)
