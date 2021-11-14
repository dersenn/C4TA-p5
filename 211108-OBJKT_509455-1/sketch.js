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
    point( cos(radians(270)) * cr, sin(radians(270)) * cr )

    stroke(0,255,0)
    point( cos(radians(60)) * cr, sin(radians(60)) * cr )
    point( cos(radians(300)) * cr, sin(radians(300)) * cr )

    stroke(0,0,255)
    point( cos(radians(120)) * cr, sin(radians(120)) * cr )
    point( cos(radians(240)) * cr, sin(radians(240)) * cr )

    stroke(255)
    point( cos(radians(0)) * cr, sin(radians(0)) * cr )
    point( cos(radians(180)) * cr, sin(radians(180)) * cr )

    strokeWeight(1)

    line(cos(radians(0)) * cr, sin(radians(0)) * cr, cos(radians(180)) * cr, sin(radians(180)) * cr)
    
    line(cos(radians(300)) * cr, sin(radians(300)) * cr, cos(radians(120)) * cr, sin(radians(120)) * cr)

    line(cos(radians(60)) * cr, sin(radians(60)) * cr, cos(radians(240)) * cr, sin(radians(240)) * cr)

}