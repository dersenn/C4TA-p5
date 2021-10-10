class Tile {
    constructor(posX, posY, tW, tH) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2
    }
    draw() {
        fill('rgba(0, 0, 0, 1)')
        ellipse(this.cX,this.cY,this.w,this.h)
    }
}

// use like so (in main app)
// let v = new Xyz(something)
// v.classFunction()

