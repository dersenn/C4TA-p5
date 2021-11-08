class Grid {
    constructor(zeroX, zeroY, w, h, cols, rows) {
        this.pos = {x: zeroX, y: zeroY}
        this.dim = {w: w, h: h}
        this.cols = cols
        this.rows = rows

        this.tileW = this.dim.w / this.cols
        this.tileH = this.dim.h / this.rows
        this.tiles = []
    }

    makeGrid() {
        for (let col = 0; col < this.cols; col++) {
            this.colOff = this.pos.x + (col * this.tileW)

                for (let row = 0; row < this.rows; row++) {
                    this.rowOff = this.pos.y + (row * this.tileH)
                    this.tiles.push( new Tile(this.colOff, this.rowOff, this.tileW, this.tileH) )
                }

        }

        return this.tiles
        }
}

class Tile {
    constructor(zeroX, zeroY, w, h) {
        this.init = {x: zeroX, y: zeroY}
        this.dim = {w: w, h: h}
        this.center = {x: this.init.x + this.dim.w/2, y: this.init.y + this.dim.h/2}

        this.pos = this.init
        this.a = random(radians(-30), radians(30))

        // this.speed = 1
    }

    drawTile() {
        rectMode(CENTER)
        noFill()
        stroke(0, 255, 0)
        rect(this.center.x, this.center.y, this.dim.w, this.dim.h)

        fill(0)
        noStroke()

        let sine = sin(this.a)

        // mousedist
        this.mDist = dist(mouseX, mouseY, this.center.x, this.center.y)

        if (this.mDist <= this.dim.w*2) {
            this.speed = map(this.mDist, 0, this.dim.w*2, 0, .7)
        } else {
            this.speed = .7
        }

        console.log(this.speed)
        // console.log(this.mDist)

        // left bowl
        this.leftY = map(sine, -1, 1, this.center.y + this.dim.h/3, this.center.y - this.dim.h/3)
        arc(this.init.x + this.dim.w/4, this.leftY, this.dim.w/3, this.dim.h/3, 0, PI)

        // right bowl
        this.rightY = map(sine, -1, 1, this.center.y - this.dim.h/3, this.center.y + this.dim.h/3)
        arc(this.init.x + 3*(this.dim.w/4), this.rightY, this.dim.w/3, this.dim.h/3, 0, PI)

        // stem
        rect(this.center.x, this.center.y, this.dim.w/10, this.dim.h*.75)

        // bar
        let rotation = map(sine, -1, 1, radians(-30), radians(30))
        push()
        translate(this.center.x, this.init.y + this.dim.h/10)
        rotate(rotation)
        rect(0, 0, this.dim.w*.75, this.dim.h/10)
        pop()

        this.a += ( TAU/120 ) * this.speed

    }
}