// endless array iteration.

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let positions = []

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)
    frameRate(4)
    //actual code starts here
    const rad = canMin/2 * .75
    for (let a = 0; a < TAU; a += TAU/12) {
        let newX = cos(a) * rad
        let newY = sin(a) * rad
        positions.push({x: newX, y: newY})
    }
}

let specialIndex = 0

// p5 Draw
function draw() {
    translate(width/2,height/2)
    rotate(-HALF_PI)
    background(255)
    for (let i = 0; i < positions.length; i++) {
        let x = positions[i].x
        let y = positions[i].y
        ellipse(x,y,10)
    }
    push()
    // noFill()
    let specialPosition = positions[specialIndex]
    ellipse(specialPosition.x, specialPosition.y, 30)
    pop()
    
    // use modulo to reset index to zero at last position
    specialIndex = (specialIndex + 1) % positions.length
}