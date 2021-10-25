class Tile {
    constructor(posX, posY, tW, tH, col) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2

        this.fgCol = random(255)
        this.bgCol = col
    }

    draw() {
        fill(this.bgCol)
        rect(this.x,this.y,this.w,this.h)
    }

}
