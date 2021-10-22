// coding train object trails
// https://www.youtube.com/watch?v=vqE8DMfOajk

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

let thing

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    thing = new Particle(mouseX,mouseY)

}

// p5 Draw
function draw() {
    background(255)
    thing.Draw()
}