class Switch {
    constructor(x,y,w,h,aInit) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        if (this.h > this.w) {
            this.isportrait = true
            this.dia = this.w
        } else {
            this.dia = this.h
        }
        this.r = this.dia / 2

        this.aInit = aInit
        this.a = random() * TAU
    }
    Draw() {
        fill(0)
        rect(this.x,this.y,this.w,this.h)

        if (this.isportrait) {
            this.cX = this.x + this.r
            this.cY = map(cos(this.a),-1,1,this.y + this.r, this.y + this.h - this.r)
        } else {
            this.cX = map(sin(this.a),-1,1,this.x + this.r,this.x + this.w - this.r)
            this.cY = this.y + this.r
        }

        fill(255)
        ellipse(this.cX, this.cY,this.dia)
        this.a += .05
    }
}