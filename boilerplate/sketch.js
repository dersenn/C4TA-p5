// some probably useful and often needed variables
const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    background('rgba(0, 255, 0, 1)')    
}

function draw() {

}

// doesn't always work
function windowResized() {
    resizeCanvas(canW, canH)
    canW = container.offsetWidth
    canH = container.offsetHeight
}