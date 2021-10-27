class Node {
    constructor(posX, posY) {
        this.pos = { x: posX, y: posY }

        this.dia = random(10, 100)
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

        fill(0)
        ellipse(this.pos.x, this.pos.y, this.dia)

        this.checkPos()
        this.updatePos()
        this.drawNet()
        this.drawSpeedVec(10)
    }

    drawSpeedVec(factor) {
        // draw the speed vector
        push()
        stroke(0, 255, 0)
        line(this.pos.x, this.pos.y, this.pos.x + this.speed.x * factor, this.pos.y + this.speed.y * factor)
        pop()
        // console.log(mag(this.speed))
    }

    drawNet() {
        line(this.pos.x, this.pos.y, 0, 0)
        line(this.pos.x, this.pos.y, 0, height)
        line(this.pos.x, this.pos.y, width, height)
        line(this.pos.x, this.pos.y, width, 0)


        // grid between nodes not working (maybe check some collision detection stuff)
        // this.other = nodes
        // for (let i = 0; i < this.other.length; i++) {
        //     line(this.x, this.y, this.other.x, this.other.y)
        // }
    }
}