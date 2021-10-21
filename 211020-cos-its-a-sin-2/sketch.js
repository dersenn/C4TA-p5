// some probably useful and often needed variables
const container = document.getElementById('p5-container')
// make sure there is a #p5-container in index.html. 

// Canvas variables
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// Global Vars
let a = 0
let aMax
let nSteps = 180
let aStep
let r = canMin/10
let d = 2 * r

let monochrome = false //true for all white circles

// p5 Setup
function setup() {
    //initial setup of canvas and containing container (sic!)
    let canvas = createCanvas(canW,canH)
    canvas.parent(container)

    //actual code starts here
    frameRate(60)
    aMax = PI
    aStep = aMax / nSteps
}

// some functions...
function drawCircle(x,y,dia,color) {
    noStroke()
    if (monochrome) {
        fill(255)
    } else {
        fill(color.r,color.g,color.b)
    }
    ellipse(x,y,dia)
}

// p5 Draw
function draw() {
    translate(width/2,height/2)
    background(0,0,0)

    let sine = sin(a)
    let cosine = cos(a)

    let sinX = map(sine,-1,1,-width/2 + r,width/2 - r)
    let cosX = map(cosine,-1,1,-width/2 + r,width/2 - r)
    let sinY = map(sine,-1,1,-height/2 + r,height/2 - r)
    let cosY = map(cosine,-1,1,-height/2 + r,height/2 - r)

    // blue. left/right.
    drawCircle(sinX,0,d,{r: 0, g: 0, b: 255})
    drawCircle(-sinX,0,d,{r: 0, g: 0, b: 255})

    drawCircle(cosX,0,d,{r: 0, g: 0, b: 128})
    drawCircle(-cosX,0,d,{r: 0, g: 0, b: 128})

    // green. up/down.
    drawCircle(0,sinY,d,{r: 0, g: 255, b: 0})
    drawCircle(0,-sinY,d,{r: 0, g: 255, b: 0})

    drawCircle(0,cosY,d,{r: 0, g: 128, b: 0})
    drawCircle(0,-cosY,d,{r: 0, g: 128, b: 0})

    // red. circular.
    drawCircle(sinX,cosY,d,{r: 255, g: 0, b: 0})
    drawCircle(-sinX,cosY,d,{r: 255, g: 0, b: 0})
    drawCircle(sinX,-cosY,d,{r: 255, g: 0, b: 0})
    drawCircle(-sinX,-cosY,d,{r: 255, g: 0, b: 0})

    drawCircle(cosX,sinY,d,{r: 128, g: 0, b: 0})
    drawCircle(-cosX,sinY,d,{r: 128, g: 0, b: 0})
    drawCircle(cosX,-sinY,d,{r: 128, g: 0, b: 0})
    drawCircle(-cosX,-sinY,d,{r: 128, g: 0, b: 0})

    // yellow. diagonal, top left/bottom right.
    drawCircle(sinX,sinY,d,{r: 255, g: 255, b: 0})
    drawCircle(cosX,cosY,d,{r: 255, g: 255, b: 0})

    drawCircle(-sinX,-sinY,d,{r: 128, g: 128, b: 0})
    drawCircle(-cosX,-cosY,d,{r: 128, g: 128, b: 0})

    // magenta. diagonal, bottom left/top right.
    drawCircle(cosX,-cosY,d,{r: 255, g: 0, b: 255})
    drawCircle(sinX,-sinY,d,{r: 255, g: 0, b: 255})

    drawCircle(-cosX,cosY,d,{r: 128, g: 0, b: 128})
    drawCircle(-sinX,sinY,d,{r: 128, g: 0, b: 128})

    // spiral. weirdo. modify r as well. Not working yet.
    push()
        let sinR = map(sine,-1,1,0 + r, sine * (width/2 - r))
        let cosR = map(cosine,-1,1,0 + r, cosine * (height/2 - r))
        drawCircle(sinR, cosR,d,{r: random()*255, g: random()*255, b: random()*255})
    pop()

    a += aStep
}