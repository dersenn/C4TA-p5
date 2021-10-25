class Tile {
    constructor(posX, posY, tW, tH, aInit) {
        this.x = posX
        this.y = posY
        this.w = tW
        this.h = tH
        this.cX = this.x + this.w/2
        this.cY = this.y + this.h/2

        this.fgCol = random(255)
        this.bgCol = 255
    }
    drawHours(i, hour) {
        this.i = i
        this.hour = hour
        if (this.i % 6 == 0) {
            this.a = 255
        } else {
            this.a = 128
        }
        if (this.i < hour) {
            fill(0,0,255,this.a)
        } else {
            fill(this.bgCol)
        }
        rect(this.x,this.y,this.w,this.h)
    }
    drawMins(i, min) {
        this.i = i
        this.min = min
        if (this.i % 5 == 0) {
            this.a = 255
        } else {
            this.a = 128
        }
        if (this.i < this.min) {
            fill(0,255,0,this.a)
        } else {
            fill(this.bgCol)
        }
        rect(this.x,this.y,this.w,this.h)
    }
    drawSecs(i, sec) {
        this.i = i
        this.sec = sec
        if (this.i % 5 == 0) {
            this.a = 255
        } else {
            this.a = 128
        }
        if (this.i < this.sec) {
            fill(255,0,0,this.a)
        } else {
            fill(this.bgCol)
        }
        rect(this.x,this.y,this.w,this.h)
    }
    drawMilSecs(i, msec) {
        this.i = i
        this.hsec = msec / 10
        if (this.i % 10 == 0) {
            this.a = 255
        } else {
            this.a = 128
        }
        if (this.i < this.hsec) {
            fill(255,255,0,this.a)
        } else {
            fill(this.bgCol)
        }
        rect(this.x,this.y,this.w,this.h)
    }
}
