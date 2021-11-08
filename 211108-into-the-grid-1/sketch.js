// this: https://www.artsy.net/artwork/vera-molnar-quatre-quarts

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

let maingrid
let margin = canMin / 10

// p5 Setup
function setup() {
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    maingrid = new Grid(margin/2, margin/2, width - margin, height - margin, 3, 3, 12, 12)
    maingrid.makeGrid()
    // console.log(maingrid)
}

// p5 Draw
function draw() {
    background(255)
    let length = .75
    let color = 255
    for (let maintile of maingrid.tiles) {
        for (let tile of maintile) {
            tile.drawTile(length, color)
        }
    length += .25
    color -= 255 / maingrid.tiles.length + 1
    }
}