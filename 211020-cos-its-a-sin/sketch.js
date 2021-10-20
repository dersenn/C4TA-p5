// some probably useful and often needed variables
const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

// Canvas variables
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Global Vars
let nPoints = 12
let maxA
let a
let r

let prevX
let prevY

console.log(prevX,prevY)

function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    frameRate(60)
    maxA = TAU
    a = maxA / nPoints
}

function draw() {
    translate(width/2,height/2)
    background(255,255,255)
    for (let p = 0; p < nPoints; p++) {
        r = random(250,250)
        if (prevX == undefined && prevY == undefined) {
            prevX = sin(p * a) * r
            prevY = cos(p * a) * r
        }
        pX = sin(p * a) * r
        pY = cos(p * a) * r
        line(prevX,prevY,pX,pY)
        noFill()
        stroke(0,255,0)
        line(0,0,pX,pY)
        stroke(0)
        ellipse(pX,pY,10)
        prevX = pX
        prevY = pY

        a += maxA / 36000
    }
}