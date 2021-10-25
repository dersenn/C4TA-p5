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

    let now = new Date()
    let time = {
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
        msec: now.getMilliseconds(),
    }

    stroke(0)
    strokeWeight(9)

    let aSec = time.sec * PI / 60
    let center = createVector(0,0)
    point(center)

    let pSec = createVector(sin(aSec) * width/2,cos(aSec) * height/2)
    point(pSec)



}