const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


// Global Vars
let tiles = []
let cols = 9
let rows = cols
let nTiles = cols * rows


// Functions
function makeGrid(zeroX, zeroY, gridCols, gridRows, gridW, gridH, initLevel, maxLevel, arr) {
    let tileW = gridW / gridCols
    let tileH = gridH / gridRows

    let myTiles = arr
    let aInit = 0
    let aStep = TAU / nTiles

    for (let x = 0; x < gridCols; x++) {
        let xOff = zeroX + (x * tileW)

            for (let y = 0; y < gridRows; y++) {
                let yOff = zeroY + (y * tileH)

                if (initLevel < maxLevel) {
                    if (coinToss(50)) {
                        myTiles.push( new Tile(xOff, yOff, tileW, tileH, aInit))
                    } else {
                        makeGrid(xOff, yOff, gridCols, gridRows, tileW, tileH, initLevel+1, maxLevel, myTiles)
                    }
                } else {
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH, aInit))
                }

                aInit += aStep

            }
    }
    return myTiles
}


// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    tiles = makeGrid(0,0,rows,cols,canW,canH,0,0,tiles)
}

// p5 Draw
function draw() {
    background(255)
    for (let t = 0; t < tiles.length; t++) {
        tiles[t].draw()
    }
}