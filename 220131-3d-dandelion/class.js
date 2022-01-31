class randomSpherePoints {
  constructor(pointCount, sphereRadius, center) {
    this.maxPoints = pointCount
    this.points = []
    this.center = center
    for (let p = 0; p < this.maxPoints; p++) {
      this.points[p] = this.randomSpherePoint(sphereRadius)
    }
  }

  draw() {
    for (let i = 0; i < this.points.length; i++) {
      stroke(0,255,0)

      strokeWeight(1)

      let speed = frameCount/50
      let pt = this.points[i]
      let min = p5.Vector.lerp(this.center, pt.pos, .25)
      let lrp = p5.Vector.lerp(min, pt.pos, map(sin(speed),-1,1,0,1))

      // SIMPLE LINE
      beginShape()
      vertex(this.center.x, this.center.y, this.center.z)
      vertex(lrp.x, lrp.y, lrp.z)
      endShape()

      ambientMaterial(0,255,0)
      noStroke()

      // lerped sphere
      push()
      translate(lrp.x,lrp.y,lrp.z)
      sphere(pt.size)
      pop()

      // SPHERE AT END
      // push()
      // translate(pt.pos.x, pt.pos.y, pt.pos.z)
      // sphere(pt.size)
      // pop()

      // strokeWeight(pt.size)
      // point(pt.pos.x, pt.pos.y, pt.pos.z)
    }
  }

  randomSpherePoint(sphereRadius) {
    let a = 0, b = 0, c = 0, d = 0, k = 99
    while (k >= 1) {
      a = random(-1,1)
      b = random(-1,1)
      c = random(-1,1)
      d = random(-1,1)
      k = a*a + b*b + c*c + d*d;
    }
    k = k / random(sphereRadius/3, sphereRadius)

    let pt = {
      pos: createVector(
        2 * (b*d + a*c) / k,
        2 * (c*d - a*b) / k,
        (a*a + d*d - b*b - c*c) / k
        ),
      size: random(5,20),
      dist: k
    }
    return pt
  }
}