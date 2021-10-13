class Tile {
    constructor(posX, posY, tW, tH, color) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.col = color
    }

    drawTile() {
        stroke(255)
        noStroke()

        // if (coinToss(50)) {
        //     fill(255)
        // } else {
        //     fill(0)
        // }

        fill(this.col.r, this.col.g, this.col.b, 255)
        rect(this.x,this.y,this.w,this.h)
    }
}

class TileContainer {
    constructor(posX, posY, conW, conH) {
        this.x = posX
        this.y = posY
        this.w = conW
        this.h = conH
    }

    drawContainer() {
        let movingTiles = makeGrid(this.x,this.y, cols, rows, this.w, this.h, 0, levels, [])

        for (var tile = 0; tile < movingTiles.length; tile++) {
            movingTiles[tile].drawTile()
        }
    }
}