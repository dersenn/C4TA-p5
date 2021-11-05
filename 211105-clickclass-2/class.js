class Structure {
    constructor(nodes) {
        this.nodes = nodes
    }

    drawStructure() {
    // make polygon here.
        beginShape()
        for (let n = 0; n < this.nodes.length; n++) {
            noStroke()
            fill(0,255,0)
            let node = this.nodes[n]
            vertex(node.pos.x, node.pos.y)
            node.checkPos()
            node.updatePos()
        }
        endShape()

    }


}


class Node {
    constructor(posX, posY) {
        this.pos = { x: posX, y: posY }

        this.dia = 10 //random(10, 100)
        this.r = this.dia / 2

        this.direction = random() * TAU
        this.speedFactor = random(1,7)

        this.speed = createVector( 
            sin(this.direction) * this.speedFactor,
            cos(this.direction) * this.speedFactor
            )
    }

    checkPos() {
        if (this.pos.x < 0 + this.r || this.pos.x > width - this.r) {
            this.speed.x *= -1
        }
        if (this.pos.y < 0 + this.r || this.pos.y > height - this.r) {
            this.speed.y *= -1
        }
    }

    updatePos() {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
    }

    drawNode(n, nodesarr) {
        this.index = n
        this.nodes = nodesarr

        this.drawNet()
        // this.drawPoint()
        // this.drawSpeedVec(10)
        this.checkPos()
        this.updatePos()
    }

    drawPoint() {
        fill(0)
        ellipse(this.pos.x, this.pos.y, this.dia)
    }

    drawSpeedVec(factor) {
        // draw the speed vector multiplied by factor (for visibility's sake)
        push()
        stroke(0, 255, 0)
        line(this.pos.x, this.pos.y, this.pos.x + this.speed.x * factor, this.pos.y + this.speed.y * factor)
        pop()
    }

    drawNet() {
        // somewhat working grid.
        // then: get it to draw all connections (for ...), but without doubles. ---> collision detection stuff.

        for (let i = 0; i < this.nodes.length; i++) {
            stroke(0,255,0)
            let i = this.index
            let last = this.nodes[this.nodes.length - 1]
            if ( i > 0 && i < this.nodes.length) {
                let prev = this.nodes[i-1]
                let prevX = prev.pos.x - prev.speed.x // account for speed change from this to previous...
                let prevY = prev.pos.y - prev.speed.y // account for speed change from this to previous...

                line(this.pos.x, this.pos.y, prevX, prevY)
            } else {
                line(this.pos.x, this.pos.y, last.pos.x, last.pos.y)
            }
        }
    }
}