class Node {
    constructor(posX, posY) {
        this.pos = createVector(posX,posY)

        // something's not working right with this speed thing (not so important)
        // hmm, the "radius" of the vector doesn't seem to be important for the speed...
        let speedFactor = 100000

        this.speedX = sin( ( random()*TAU ) * speedFactor )
        this.speedY = cos( ( random()*TAU ) * speedFactor )
        this.speed = createVector( this.speedX, this.speedY )

        this.dia = random(10,100)
        this.r = this.dia / 2
    }

    updatePos() {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
    }

    checkPos() {
        if (this.pos.x < 0 + this.r || this.pos.x > width - this.r) {
            this.speed.x *= -1
        }
        if (this.pos.y < 0 + this.r || this.pos.y > height - this.r) {
            this.speed.y *= -1
        }
    }

    drawNode() {
        fill(0)
        ellipse(this.pos.x, this.pos.y, this.dia)
        this.checkPos()
        this.updatePos()
    }

    drawNet(nodes) {
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