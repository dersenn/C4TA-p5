const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

let maingrid

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    maingrid = new Grid(0, 0, width, height, 2, 2, 9, 9)
    maingrid.makeGrid()
    console.log(maingrid.tiles)
}

// p5 Draw
function draw() {
    for (let tile of maingrid.tiles) {
        tile.drawTile()
    }
}