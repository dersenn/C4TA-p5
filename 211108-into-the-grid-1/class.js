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

class Curve {
    constructor(zero, center, bend) {

    }
}


class Tile {
    constructor(zeroX, zeroY, w, h) {
        this.pos = {x: zeroX, y: zeroY}
        this.dim = {w: w, h: h}
        this.c = {x: this.pos.x + this.dim.w/2, y: this.pos.y + this.dim.h/2}

        this.a = random(TAU)

        // for auto generation
        this.nCurves = 4
        this.curves = []
    }

    drawTile(color) {
        this.col = color

        noFill()
        stroke(0,this.col,0)
        strokeWeight(3)
        // rect(this.pos.x, this.pos.y, this.dim.w, this.dim.h)

        let sine = sin(this.a)

        this.bend = map(sine, -1, 1, this.dim.w/8, this.dim.w/3)
        // this.bend = this.dim.w/3 // Can be used to animate wobble later (maybe)

        bezier( this.pos.x, this.pos.y, 
                this.pos.x, this.pos.y + this.bend, 
                this.c.x - this.bend, this.c.y, 
                this.c.x, this.c.y )

        bezier( this.pos.x, this.pos.y + this.dim.h, 
                this.pos.x + this.bend, this.pos.y + this.dim.h, 
                this.c.x, this.c.y + this.bend, 
                this.c.x, this.c.y )

        bezier( this.pos.x + this.dim.w, this.pos.y + this.dim.h, 
                this.pos.x + this.dim.w, this.pos.y + this.dim.h - this.bend, 
                this.c.x + this.bend, this.c.y, 
                this.c.x, this.c.y )

        bezier( this.pos.x + this.dim.w, this.pos.y, 
                this.pos.x + this.dim.w - this.bend, this.pos.y, 
                this.c.x, this.c.y - this.bend, 
                this.c.x, this.c.y )


        stroke(255,0,0)
        strokeWeight(3)
        // point(this.c.x, this.c.y)

        this.a += TAU/180

    }
}