// endless array iteration.

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let positions = []
let steps = 60

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)
    frameRate(30)
    //actual code starts here
    const rad = canMin/2 * .75
    for (let a = 0; a < TAU; a += TAU/steps) {
        let newX = cos(a) * rad
        let newY = sin(a) * rad
        positions.push({x: newX, y: newY})
    }
}

// p5 Draw
function draw() {
    translate(width/2,height/2)
    rotate(-HALF_PI)
    background(255)

    let now = new Date()
    let time = {
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
    }
    // console.log(time.hour,time.min,time.sec)

    for (let i = 0; i < positions.length; i++) {
        let x = positions[i].x
        let y = positions[i].y
        if (i % 5 == 0) {
            fill(0)
        } else {
            fill(255)
        }
        ellipse(x,y,10)
    }

    // hours hand
    push()
    stroke(0,255,0)
    strokeWeight(12)
    let hourPosition = positions[time.hour % 12 * 5]
    line(0,0,hourPosition.x, hourPosition.y)
    // ellipse(hourPosition.x, hourPosition.y, 30)
    pop()

    // minutes hand
    push()
    stroke(0,0,255)
    strokeWeight(12)
    let minPosition = positions[time.min]
    line(0,0,minPosition.x, minPosition.y)
    pop()

    // seconds hand
    push()
    noStroke()
    fill(255,0,0)
    let secPosition = positions[time.sec]
    ellipse(secPosition.x, secPosition.y, 30)
    pop()
}