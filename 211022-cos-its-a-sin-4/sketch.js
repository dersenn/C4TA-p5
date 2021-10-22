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

// Functions

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    thing = new Switch(0,0,canW,200,0)
    for (let i = 0; i < 4; i++) {
        let step = width / 4
        things.push( new Switch(i * step,200,step,canH - 200,0))
    }
}

// p5 Draw
function draw() {
    thing.Draw()
    for (let t = 0; t < things.length; t++) {
        things[t].Draw()
    }
}