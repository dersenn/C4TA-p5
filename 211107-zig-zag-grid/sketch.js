// trying to create an alternating grid. first row ltr, second rtl... etc.

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let gridCols = 3
let gridRows = gridCols

let tileW = canMin / gridCols
let tileH = canMin / gridRows

let nTiles = gridCols * gridRows

let cInc = 255 / nTiles

let myTiles = []

class Tile {
    constructor(posX, posY, w, h, color) {
        this.x = posX
        this.y = posY
        this.w = w
        this.h = h
        this.col = color
    }
    drawTile() {
        fill(this.col)
        rect(this.x, this.y, this.w, this.h)
    }

}

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    let color = 0

    //actual code starts here
    for (let x = 0; x < gridCols; x++) {
        let xOff = 0 + (x * tileW)
            for (let y = 0; y < gridRows; y++) {
                let yOff
                if (x % 2 == 0) {
                    yOff = 0 + (y * tileH)
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH, color))
                } else {
                    yOff = height - (y * tileH)
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH, color))
                }
                color += cInc
            }
    }
}

// p5 Draw
function draw() {
    for (let tile of myTiles) {
        tile.drawTile()
    }
}