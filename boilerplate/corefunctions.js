// Some recurring useful functions.

// Random Function (chance = percentage, e.g. 50)
function coinToss(chance) {
    if (random() < chance / 100) {
        return true
    }
}

// Draw Guides for a grid
function drawGuides(cols,rows) {
    push()
    stroke(128)
    let xStep = width / cols
    let yStep = height / rows
    for (let x = 0; x < width; x += xStep) {
        if (x > 0) {
            line(x,0,x,height)
        }
    }
    for (let y = 0; y < height; y += yStep) {
        if (y > 0) {
            line(0,y,width,y)
        }
    }
    pop()
}

// doesn't work
// don't know if it ever did... needs some work.
function windowResized() {
    resizeCanvas(canW, canH)
    canW = container.offsetWidth
    canH = container.offsetHeight
}