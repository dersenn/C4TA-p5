class Particle {
    constructor(x,y) {
        this.x = x
        this.y = y

        this.size = 30
        this.history = []
        this.memory = 30
        this.sizeStep = this.size / this.memory
    }
    Draw() {
        this.x = mouseX
        this.y = mouseY
        ellipse(this.x,this.y,30)

        let v = createVector(this.x,this.y)
        this.history.push(v)

        if (this.history.length > this.memory) {
            this.history.splice(0,1)
        }

        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i]
            ellipse(pos.x, pos.y ,i * this.sizeStep)
        }
    }
}