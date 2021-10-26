class Node {
    constructor(posX, posY) {
        this.x = posX
        this.y = posY

        // something's not working right with this speed thing (not so important)
        let speedFactor = 1000

        this.speedX = sin( ( random()*TAU ) * ( random()*speedFactor ) )
        this.speedY = cos( ( random()*TAU ) * ( random()*speedFactor ) )
        this.speed = createVector( this.speedX, this.speedY )

        this.dia = random(10,100)
        this.r = this.dia / 2
    }

    updatePos() {
        this.x += this.speed.x
        this.y += this.speed.y
    }

    checkPos() {
        if (this.x < 0 + this.r || this.x > width - this.r) {
            this.speed.x *= -1
        }
        if (this.y < 0 + this.r || this.y > height - this.r) {
            this.speed.y *= -1
        }
    }

    drawNode() {
        fill(0)
        ellipse(this.x, this.y, this.dia)
        this.checkPos()
        this.updatePos()
    }

    drawNet(nodes) {
        line(this.x, this.y, 0, 0)
        line(this.x, this.y, 0, height)
        line(this.x, this.y, width, height)
        line(this.x, this.y, width, 0)


        // grid between nodes not working (maybe check some collision detection stuff)
        // this.other = nodes
        // for (let i = 0; i < this.other.length; i++) {
        //     line(this.x, this.y, this.other.x, this.other.y)
        // }
    }
}