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
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    maingrid = new Grid(0, 0, width, height, 2, 2, 3, 3)
    maingrid.makeGrid()
    console.log(maingrid)
}

// p5 Draw
function draw() {
    let length = .25
    for (let maintile of maingrid.tiles) {
        for (let tile of maintile) {
            tile.drawTile(length)
        }
    length += .25
    }
}