class Tile {
    constructor(posX, posY, tW, tH, aInit) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2

        this.a = aInit
        this.r = this.w / 6
        this.d = this.r * 2

        this.fgCol = random(255)
        this.bgCol = 255 - this.fgCol
    }
    draw() {
        push()

        translate(this.cX, this.cY)

        this.pX = sin(this.a) * (this.w/2 - this.r)
        this.pY = cos(this.a) * (this.h/2 - this.r)

        fill(0)
        ellipse(this.pX, this.pY,this.d)

        pop()

        this.a += 0.05
    }
}
