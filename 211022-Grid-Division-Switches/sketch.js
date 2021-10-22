const p5container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

let canW = p5container.offsetWidth //canvas Width based on html container size
let canH = p5container.offsetHeight //canvas Height based on html container size
let canMax = Math.max(canW, canH) //longer canvas side (useful if not square)
let canMin = Math.min(canW, canH) //shorter canvas side (useful if not square)

let cols
let rows
let levels = 1

let maxDivisionsX = cols ** (levels + 1)
let maxDivisionsY = rows ** (levels + 1)

let minTileW = canW / maxDivisionsX
let minTileH = canH / maxDivisionsX

let colors = [
    {r: 0, g: 0, b: 255},
    {r: 0, g: 255, b: 0},
    {r: 255, g: 0, b: 0}
    ]

let monochrome = true

// Random Function (chance = percentage, e.g. 50)
function coinToss(chance) {
    if (random() < chance / 100) {
        return true
    }
}

// Recursive grid Generator
function makeGrid(zeroX, zeroY, gridCols, gridRows, gridW, gridH, initLevel, maxLevel, arr) {
    let tileW = gridW / gridCols
    let tileH = gridH / gridRows

    let myTiles = arr

    for (let x = 0; x < gridCols; x++) {
        let xOff = zeroX + (x * tileW)

            for (let y = 0; y < gridRows; y++) {
                let yOff = zeroY + (y * tileH)

                if (initLevel < maxLevel) {
                    if (coinToss(50)) {
                        myTiles.push( new Tile(xOff, yOff, tileW, tileH, random(colors)) )
                    } else {
                        makeGrid(xOff, yOff, floor(random(1,3)), floor(random(1,3)), tileW, tileH, initLevel+1, maxLevel, myTiles)
                    }
                } else {
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH, random(colors)) )
                }
            }
    }
    return myTiles
}

let Tiles

function setup() {
    // Setup Canvas and place it in container
    let canvas = createCanvas(canW,canH)
    canvas.parent(p5container)
    frameRate(60)

    cols = floor(random(1,4))
    rows = floor(random(1,4))
    // create the Tiles
    Tiles = makeGrid(0,0, cols, rows, canW, canH, 0, levels, [])
}

function draw() {
    for (var t = 0; t < Tiles.length; t++) {
        Tiles[t].Draw()
    }
}

