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
                        this.makeGrid(this.colOff, this.rowOff, this.tileW, this.tileH, this.sCols, this.sRows, 0, 0)
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
    }

    drawTile() {
        ellipse(this.pos.x, this.pos.y, this.dim.w, this.dim.h)
    }
}