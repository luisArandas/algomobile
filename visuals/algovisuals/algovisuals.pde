/* Testing some data VIZ*/
import controlP5.*;
import oscP5.*;

OscP5 oscP5;

float time;
float lineOffset = 1;
float lineOffsetL = 0;
float timeNoWrap;
float snapTimer = 0;

PGraphics pg1;
PGraphics txt;

boolean anim_1 = false;
boolean anim_2 = false;
boolean anim_3 = false;

int timer;
ArrayList<GShader> shaders;
GShader shader;
PGraphics pg;
int idxShader = -1;

void setup(){
  
  size(650,450, P3D);
  //fullScreen(P3D);
  background(0,0,0);
  oscP5 = new OscP5(this,12000);
  
  //smooth(8);
  //frameRate(60);
  setupShaders();
  setupGui();  
  setShader(1);
  pg = createGraphics(960, 720, OPENGL);
  pg1 = createGraphics(width, height, P3D);
  txt = createGraphics(width/4, height/2);

  oscP5.plug(this,"ints","/ints");
  oscP5.plug(this,"strings","/strings");
  oscP5.plug(this,"floats","/floats");
}


void draw() {
  flickrDataOne();
  wierdShapes();
  //flickrDataTwo();
  
   if (millis() - timer >= 2000) {
    println("Printing");
    //background(random(255));
    int x = (int)random(8);
    //setShader(x);
    timer = millis();
  }
  setShader();
}


public void ints(int ints){
  println(ints);
}

public void strings(String string){
  println(string);
}

public void floats(float floats) {
  println(floats);
}





void keyPressed() { 
  if (key == 'a'){
    anim_1 = true;
  }
  if (key == 's'){
    anim_2 = true;
  }
  if (key == 'd'){
    anim_3 = true;
  }
  if (key == 'f'){
    //anim_2 = false;
  }
}


/*
int DIM, NUMQUADS; // variables to hold the grid dimensions and total grid size
PImage img; // the image

void setup() {
  img = loadImage("image.jpg"); // load the image (from the /data subdirectory)
  size(900, 900, P2D); // set the width of the sketch to twice the image width
  textureMode(NORMAL); // use normalized (0 to 1) texture coordinates
  noStroke(); // turn off stroke (for the rest of the sketch)
  smooth(6); // set smooth level 6 (default is 2)
}

void draw() {
  DIM = (int) map(mouseX, 0,width, 1, 40); // set DIM in the range from 1 to 40 according to mouseX
  NUMQUADS = DIM*DIM; // calculate the total number of cells in the grid
  beginShape(QUAD); // draw a Shape of QUADS
  texture(img); // use the image as a texture
  // draw all the QUADS in the grid...
  for (int i=0; i<NUMQUADS; i++) {
    // ...through a custom drawQuad method that takes as input parameters
    // the index for the position and the index for the texture coordinates
    // therefore: drawQuad(i, i); would look like the regular image
    // currently frameCount-based noise determines the index for the texture coordinates
    drawQuad(i, int(i+noise(i+frameCount*0.001)*NUMQUADS)%NUMQUADS);
  }
  endShape(); // finalize the Shape
  image(img, width/2, 0); // display the regular image on the right side of the sketch
  frame.setTitle(int(frameRate) + " fps"); // the fps remains 60 even with dynamic texture changes and a high-density grid
}

void drawQuad(int indexPos, int indexTex) {
  // calculate the position of the vertices
  float x1 = float(indexPos%DIM)/DIM*width/2;
  float y1 = float(indexPos/DIM)/DIM*height;
  float x2 = float(indexPos%DIM+1)/DIM*width/2;
  float y2 = float(indexPos/DIM+1)/DIM*height;

  // calculate the texture coordinates
  float x1Tex = float(indexTex%DIM)/DIM;
  float y1Tex = float(indexTex/DIM)/DIM;
  float x2Tex = float(indexTex%DIM+1)/DIM;
  float y2Tex = float(indexTex/DIM+1)/DIM;

  // use the above calculations for 4 vertex() calls
  vertex(x1, y1, x1Tex, y1Tex);
  vertex(x2, y1, x2Tex, y1Tex);
  vertex(x2, y2, x2Tex, y2Tex);
  vertex(x1, y2, x1Tex, y2Tex);
}

*/

/* Barrinhas que podem ser usadas */

  /*pg.clip(width / 25, height / 25, width - width / 25 * 2, height - height / 25 * 2);
  for (float i = 0; i < 800; i += 40){
    pg.pushMatrix();
    float y = height - i + ((time) * 40) % 40;
    pg.translate(width / 2 + width / 3.25, y, 0);
    pg.rotateY(y / 80 + TAU * time);
    pg.popMatrix();  
  }
  pg.clip(0, 0, width, height);*/
  
  /*pg.pushMatrix();
  //pg.translate(width / 30, height - height / 30, 0);
  pg.rectMode(CORNER);
  for (float i = 0; i < 8; i++){
    pg.rect(width / 25 + width / 25 * (i * 2), height - height / 25, 20, -max(0, 140 + sin((TAU * time) + (i * i * 40)) * 120 + cos(i * i * 25) * (20 * sin(i))));
  }
  pg.popMatrix(); */
