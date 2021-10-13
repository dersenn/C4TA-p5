// some probably useful and often needed variables
const p5container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

let canW = p5container.offsetWidth //canvas Width based on html container size
let canH = p5container.offsetHeight //canvas Height based on html container size
let canMax = Math.max(canW, canH) //longer canvas side (useful if not square)
let canMin = Math.min(canW, canH) //shorter canvas side (useful if not square)

let cols = 2
let rows = cols
let levels = 2

let maxDivisionsX = cols ** (levels + 1)
let maxDivisionsY = rows ** (levels + 1)

let minTileW = canW / maxDivisionsX
let minTileH = canH / maxDivisionsX

let colors = [
    {r: 0, g: 0, b: 255},
    {r: 0, g: 255, b: 0},
    {r: 255, g: 0, b: 0}
    ]

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
                        makeGrid(xOff, yOff, gridCols, gridRows, tileW, tileH, initLevel+1, maxLevel, myTiles)
                    }
                } else {
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH, random(colors)) )
                }
            }
    }
    return myTiles
}

function setup() {
    // Setup Canvas and place it in container
    let canvas = createCanvas(canW,canH)
    canvas.parent(p5container)

    frameRate(3)
    // blendMode(SCREEN)

    // create the "background" Tiles
    let bgTiles = makeGrid(0,0, cols, rows, canW, canH, 0, levels, [])
    for (var tile = 0; tile < bgTiles.length; tile++) {
        bgTiles[tile].drawTile()
    }
}

function draw() {
    // Currently only works for 2*2 grid...
    // Also, the updating of the position should go into class and not happen randomly in draw()
    let containerPosX = int(random(0, maxDivisionsX/cols + 1)) * minTileW
    let containerPosY = int(random(0, maxDivisionsY/rows + 1)) * minTileH

    // Create the moving Tiles ()
    let container = new TileContainer(containerPosX,containerPosY,canW/cols,canH/cols)
    container.drawContainer()

    // Show The Minimum Tile Size
    // push()
    // fill(255,0,0)
    // rect(0, 0, minTileW, minTileH)
    // pop()

    // noLoop()
}

