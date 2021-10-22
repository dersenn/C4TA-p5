class Tile {
    constructor(x,y,w,h,col) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.col = col
        if (this.h > this.w) {
            this.isportrait = true
            this.dia = this.w
        } else {
            this.dia = this.h
        }
        this.r = this.dia / 2

        if (monochrome) {
            let rndCol = random() * 255
            this.fgCol = {r: 255-rndCol, g: 255-rndCol, b: 255-rndCol}
            this.bgCol = {r: rndCol, g: rndCol, b:rndCol}
        } else {
            this.fgCol = {r: 255, g: 255, b: 255}
            this.bgCol = {r: this.col.r, g: this.col.g, b: this.col.b}
        }
        this.a = random() * TAU
    }
    Draw() {
        noStroke()
        fill(this.bgCol.r,this.bgCol.g,this.bgCol.b)
        rect(this.x,this.y,this.w,this.h)

        if (this.isportrait) {
            this.cX = this.x + this.r
            this.cY = map(cos(this.a),-1,1,this.y + this.r, this.y + this.h - this.r)
        } else {
            this.cX = map(sin(this.a),-1,1,this.x + this.r,this.x + this.w - this.r)
            this.cY = this.y + this.r
        }

        fill(this.fgCol.r,this.fgCol.g,this.fgCol.b)
        ellipse(this.cX, this.cY,this.dia)
        this.a += .05
    }
}