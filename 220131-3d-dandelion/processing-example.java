//==============================================================
// sketch:  PG_RandomSpherePoints_Cook.pde
// create random points on a sphere surface
// version: v1.0  2012-09-07   initial version  
//          v1.1  2014-04-14   usage of class 
//          v1.5  2018-06-10   see https://www.openprocessing.org/sketch/445415
// tags: random, distributed, sphere, surface, points, uniform
//==============================================================

/** 
 Cook (1957) extended a method of von Neumann (1951) to give a simple method 
 of picking points uniformly distributed on the surface of a unit sphere. <bs>

 Pick four numbers a,b,c, and d from a uniform distribution on (-1,1), 
 and reject pairs with k>=1 where k=a^2+b^2+c^2+d^2. 

 From the remaining points, the rules of quaternion transformation then imply 
 that the points with Cartesian coordinates
   x = 2*(b*d +a*c) / k
   y = 2*(c*d -a*b) / k
   z = (a^2 +d^2 -b^2 -c^2) / k
 have the desired distribution (Cook 1957, Marsaglia 1972). 
*/
//--------------------------------------------------------

int randomPoints = 2000;
float rotX, rotY = 0.0;
randomSpherePoints rsp;

//--------------------------------------------------------
void setup()
{
  size(512, 512, P3D);
  //println (">>> PG_RandomSpherePoints_Cook v1.1 <<<");
  smooth();
  stroke(40, 166);
  strokeWeight(4.0);
  rsp = new randomSpherePoints (randomPoints, round(width / 2.5));
}
//--------------------------------------------------------
void draw()
{
  background(222);
  translate(width*0.5, height*0.5);
  rotateX (rotX);
  rotateY (rotY);
  rsp.draw();

  if (mousePressed)
  {
     rotY += (pmouseX - mouseX) * -0.002;
     rotX += (pmouseY - mouseY) * +0.002;
     //println (round(frameRate) + " fps");
  }
  rotY += 0.002;
}
//--------------------------------------------------------
void keyPressed()
{
  if (key == 's') save("RandomSpherePoints.png");
  if (key == ' ') rsp = new randomSpherePoints (randomPoints, round(width / 2.5));
}


//==============================================================
// file:    RandomSpherePoints_Cook.pde
//          create random points on a sphere surface
// version: v1.0  2012-09-07   initial version  
//          v1.1  2014-04-14   source code embedded to class
// see  http://mathworld.wolfram.com/SpherePointPicking.html
//==============================================================
class randomSpherePoints
{
  int maxPoints = 0;
  PVector[] points;
  
  //--------------------------------------------------------
  // create random sphere points
  //--------------------------------------------------------
  randomSpherePoints (int pointCount, float sphereRadius)
  { 
    maxPoints = pointCount; 
    points = new PVector[pointCount];
    for (int ni=0; ni < maxPoints; ni++)
    points[ni] = randomSpherePoint (sphereRadius);
  }
 
  //--------------------------------------------------------
  // draw random sphere points  
  //--------------------------------------------------------
  void draw()
  {  
    for (int ni=0; ni < maxPoints; ni++)
    point (points[ni].x, points[ni].y, points[ni].z);
  }

  //--------------------------------------------------------
  // return random sphere point using method of Cook/Neumann
  //--------------------------------------------------------
  PVector randomSpherePoint (float sphereRadius)
  {
    float a=0, b=0, c=0, d=0, k=99;
    while (k >= 1.0) 
    { 
      a = random (-1.0, 1.0);
      b = random (-1.0, 1.0);
      c = random (-1.0, 1.0);
      d = random (-1.0, 1.0);
      k = a*a +b*b +c*c +d*d;
    }
    k = k / sphereRadius;
    return new PVector 
      ( 2*(b*d + a*c) / k 
      , 2*(c*d - a*b) / k  
      , (a*a + d*d - b*b - c*c) / k);
  }
}