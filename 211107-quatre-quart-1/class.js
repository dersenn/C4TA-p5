class Grid {
    constructor(zeroX, zeroY, w, h, cols, rows, subcols, subrows) {
        this.pos = {x: zeroX, y: zeroY}
        this.dim = {w: w, h: h}
        this.cols = cols
        this.rows = rows
        this.sCols = subcols
        this.sRows = subrows

        this.tileW = this.dim.w / this.cols
        this.tileH = this.dim.h / this.rows
        this.tiles = []
    }

    makeGrid() {
        for (let col = 0; col < this.cols; col++) {
            this.colOff = this.pos.x + (col * this.tileW)

                for (let row = 0; row < this.rows; row++) {
                    this.rowOff = this.pos.y + (row * this.tileH)

                    if (this.sCols > 0 || this.sRows > 0) {
                        let subgrid = new Grid(this.colOff, this.rowOff, this.tileW, this.tileH, this.sCols, this.sRows, 0, 0)
                        this.tiles.push( subgrid.makeGrid() )
                    } else {
                        this.tiles.push( new Tile(this.colOff, this.rowOff, this.tileW, this.tileH) )
                    }

                }

        }

        return this.tiles
        }
}


class Tile {
    constructor(zeroX, zeroY, w, h) {
        this.pos = {x: zeroX, y: zeroY}
        this.dim = {w: w, h: h}

        this.angles = [QUARTER_PI, HALF_PI, PI]
        this.a = random(this.angles)

    }

    drawTile(length) {
        this.r = this.dim.w / 2
        push()
        translate(this.pos.x + this.r, this.pos.y + this.r)
        rotate(this.a)

        noFill()
        stroke(0)
        ellipse(0, 0, this.dim.w * length, this.dim.h)

        stroke(0, 255, 0)
        line(0, 0, this.r, this.r)

        pop()

        this.a += TAU/3
    }
}