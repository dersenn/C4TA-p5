class Tile {
    constructor(posX, posY, tW, tH) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
    }

    drawTile() {
        // noStroke()
        if (coinToss(50)) {
            fill(255)
        } else {
            fill(0)
        }
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
        let circleTiles = makeGrid(this.x,this.y, cols, rows, this.w, this.h, 0, levels, [],)

        for (var tile = 0; tile < circleTiles.length; tile++) {
            circleTiles[tile].drawTile()
        }
    }
}