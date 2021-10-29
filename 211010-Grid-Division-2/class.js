class Tile {
    constructor(posX, posY, tW, tH) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2

        this.fgCol = random(255)
        this.bgCol = 255 - this.fgCol

        let angles = [0, HALF_PI, PI, PI * 1.5, TWO_PI]
        this.å = random(angles)
    }

    draw() {
        let aW = this.w*2
        let aH = this.h*2
        let nArcs = 5
        let aStep = aW / nArcs

        console.log(this.å)

        noStroke()
        fill(this.bgCol)
        rect(this.cX,this.cY,this.w,this.h)

        push()
        translate(this.x + this.w/2, this.y + this.h/2)

        rect(0,0,this.w,this.h)

        rotate(this.å)

        for (let i = 0; i < nArcs; i++) {
            fill(this.fgCol - i * (this.fgCol/nArcs))
            arc(this.x-this.w/2, this.y-this.h/2, aW - i*aStep, aH - i*aStep, this.å, this.å + HALF_PI)

            // ellipse(this.cX,this.cY,this.w,this.h)
        }

        pop()

    }
}