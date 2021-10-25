// endless array iteration.

const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html.

// Canvas Vars
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side


let hoursMax = 24
let minsMax = 60
let secsMax = 60
let hsecsMax = 100

let nGrids = 4

let clockGrid = []

let hoursGrid = []
let minsGrid = []
let secsGrid = []
let hsecsGrid = []

// p5 Setup
function setup() {
    //initial setup of canvas and container
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)
    frameRate(60)
    //actual code starts here

    hoursGrid = simpleGrid(0,0,hoursMax,1,width,height/nGrids,hoursGrid)
    minsGrid = simpleGrid(0,height/nGrids,minsMax,1,width,height/nGrids,minsGrid)
    secsGrid = simpleGrid(0,2 * height/nGrids,secsMax,1,width,height/nGrids,secsGrid)
    hsecsGrid = simpleGrid(0,3 * height/nGrids,hsecsMax,1,width,height/nGrids,hsecsGrid)
}

// p5 Draw
function draw() {
    background(255)

    let now = new Date()
    let time = {
        hour: now.getHours(),
        min: now.getMinutes(),
        sec: now.getSeconds(),
        msec: now.getMilliseconds(),
    }

    stroke(240)

    for (let h = 0; h < hoursGrid.length; h++) {
        hoursGrid[h].drawHours(h, time.hour)
    }

    for (let m = 0; m < minsGrid.length; m++) {
        minsGrid[m].drawMins(m, time.min)
    }

    for (let s = 0; s < secsGrid.length; s++) {
        secsGrid[s].drawSecs(s, time.sec)
    }

    for (let hs = 0; hs < hsecsGrid.length; hs++) {
        hsecsGrid[hs].drawMilSecs(hs, time.msec)
    }

    // console.log(time.hour, time.min, time.sec, time.ms)
}