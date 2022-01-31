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
      strokeWeight(10)
      point(this.points[i].x, this.points[i].y, this.points[i].z)
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
    k = k / sphereRadius
    return createVector(
      2 * (b*d + a*c) / k,
      2*(c*d - a*b) / k,
      (a*a + d*d - b*b - c*c) / k)
  }
}