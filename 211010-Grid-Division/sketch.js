// some probably useful and often needed variables
const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


function coinToss(chance) {
    if (random() < chance / 100) {
        return true
    }
}

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
                        myTiles.push( new Tile(xOff, yOff, tileW, tileH))
                        // cells.push(new GridObject(x * elW, y * elH, elW, elH, c, v, a))
                    } else {
                        makeGrid(xOff, yOff, gridCols, gridRows, tileW, tileH, initLevel+1, maxLevel, myTiles)
                    }
                } else {
                    myTiles.push( new Tile(xOff, yOff, tileW, tileH))
                }
            }
    }
    return myTiles
}

function setup() {
    //initial setup of canvas and containing container (sic!)
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here

    background('rgba(0, 255, 0, 1)')

    let circleTiles = makeGrid(0,0, 2, 2, canW, canH, 0, 2, [])
    console.log(circleTiles)

    for (var tile = 0; tile < circleTiles.length; tile++) {
        circleTiles[tile].draw()
        console.log('drawing tile')
    }
}

function draw() {

}

// doesn't always work
function windowResized() {
    resizeCanvas(canW, canH)
    canW = container.offsetWidth
    canH = container.offsetHeight
}