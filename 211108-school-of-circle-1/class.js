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

        this.angles = [QUARTER_PI, HALF_PI, PI]
        this.a = 0

    }

    drawTile() {

        let sine = sin(this.a) + 1
        this.pos = {
            x: map(sine, -1, 1, this.init.x, this.init.x + this.dim.w),
            y: this.init.y + this.dim.h/2
        }

        ellipse(this.pos.x, this.pos.y, 10)

        this.a += TAU/60

    }
}