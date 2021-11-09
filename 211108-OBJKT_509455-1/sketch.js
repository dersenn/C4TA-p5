const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let cdia = canW/2
let cr = cdia/2
let center = {x: canW/2, y: canH/2}

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
}

// p5 Draw
function draw() {
    background(0,0,0)

    translate(center.x, center.y)

    stroke(255)
    noFill()
    strokeWeight(1)

    ellipse(0, 0, cdia)

    strokeWeight(9)


    stroke(255,0,0)
    point( 0, - cr )

    stroke(0,255,0)
    point( cos(radians(30)) * cr, sin(radians(30)) * cr )

    stroke(0,0,255)
    point( cos(radians(150)) * cr, sin(radians(150)) * cr )

    stroke(255)
    point( cos(radians(90)) * cr, sin(radians(90)) * cr )



}