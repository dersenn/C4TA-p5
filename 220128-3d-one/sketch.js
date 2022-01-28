// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// "Global" vars



// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH)
  canvas.parent(container)
}

// p5 Draw
function draw() {
}