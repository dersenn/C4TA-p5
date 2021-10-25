class Tile {
    constructor(posX, posY, tW, tH, col, level, index) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2

        this.level = level
        this.index = index

        this.fgCol = random(255)
        this.bgCol = col
    }

    draw(time, intervals) {
        this.time = time
        this.intervals = intervals
        if (this.time[this.level] < this.index ) {
            fill(this.bgCol)
        } else {
            fill(255,0,0)
        }
        rect(this.x,this.y,this.w,this.h)
    }

}
