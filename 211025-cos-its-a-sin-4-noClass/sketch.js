const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Global Vars
let thing
let things = [] 

let a = 0

// Functions
function drawSwitch(x,y,w,h) {
    fill(0)
    rect(x,y,w,h)

    let isportrait
    let dia

    let cX
    let cY

    if (h > w) {
        isportrait = true
        dia = w
    } else {
        dia = h
    }
    let r = dia / 2

    if (isportrait == true) {
        cX = x + r
        cY = map(cos(a),-1,1,y + r, y + h - r)
    } else {
        cX = map(sin(a),-1,1,x + r,x + w - r)
        cY = y + r
    }

    fill(255)
    ellipse(cX, cY,dia)
}


// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    frameRate(30)

}

// p5 Draw
function draw() {
    drawSwitch(0,0,width,200)
    for (let i = 0; i < 4; i++) {
        let step = width / 4
        drawSwitch( i * step, 200, step, height - 200)
    }

    a += .1

}