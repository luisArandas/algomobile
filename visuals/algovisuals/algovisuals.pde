/* Testing some data VIZ 
   See what I rcv from max <--
   
   METER LETRAS MEIO COM FUNDO PRETO OK? OK
*/

import controlP5.*;
import oscP5.*;

OscP5 oscP5;

PFont f;

float time;
float lineOffset = 1;
float lineOffsetL = 0;
float timeNoWrap;
float snapTimer = 0;

PGraphics pg1;
PGraphics txt;

String algoText;

boolean anim_1 = false;
boolean anim_2 = false;
boolean anim_3 = false;

boolean drawAlgoText = false;

int timer;
ArrayList<GShader> shaders;
GShader shader;
PGraphics pg;
int idxShader = -1;

void setup(){
  
  //size(650,450, P3D);
  fullScreen(P3D);
  background(0,0,0);
  oscP5 = new OscP5(this,12000);

  frame.setTitle("Algo 2.0");
  f = createFont("Arial", 16, true);
  //smooth(8);
  //frameRate(60);
  setupShaders();
  setupGui();  
  setShader(0);
  pg = createGraphics(width,height,P3D);
  //pg1 = createGraphics(width, height, P3D);
  //txt = createGraphics(width/4, height/4);

  oscP5.plug(this,"ints","/ints");
  oscP5.plug(this,"strings","/strings");
  oscP5.plug(this,"floats","/floats"); // <bang1 - "acabauCutf>"
  oscP5.plug(this,"oscShaders","/shaders"); // <bang1 - "acabauCutf>"
  
  // Put the sliders here
  //cp5.getController("intense").setValue(1);
  //cp5.getController("speed").setValue(1);
  //cp5.getController("graininess").setArrayValue(new float[] {0, 1});
  algoText = "Algo 2.0";
}


void draw() {
  
  setShader();
  
  //algoText();
  if (drawAlgoText == true){
    algoText();
  }
  
  //flickrDataOne();
  //wierdShapes();
  //flickrDataTwo();
  
  if (millis() - timer >= 2000) {
    println("Printing");
    //background(random(255));
    int x = (int)random(8);
    //setShader(x);
    timer = millis();
  }
}

public void oscShaders(int ints){
  println(ints);
  if (ints == 0) {
    setShader(7);
  }
  if (ints == 1){
    setShader(10);
  }
}

public void ints(int ints){
  println(ints);
}

public void strings(String string){
  algoText= string;
  println(algoText);
}

public void floats(float floats) {
  println(floats);
  float o = floats;
  cp5.getController("depth").setValue(o);
  cp5.getController("graininess").setArrayValue(new float[] {o, o});
  
}



void keyPressed() { 
  if (key == 'q'){
    setShader(0);
  }
  if (key == 'w'){
    setShader(1);
  }
  if (key == 'e'){
    setShader(2);
  }
  if (key == 'r'){
    setShader(3);
  }
  if (key == 't'){
    setShader(4);
  }
  if (key == 'y'){
    setShader(5);
  }
  if (key == 'u'){
    setShader(6); // Not Working
  }
  if (key == 'i'){
    setShader(7);
  }
  if (key == 'o'){
    setShader(8);
  }
  if (key == 'p'){
    setShader(9);
  }
  if (key == 'a'){
    setShader(10);
  }
  if (key == 's'){
    setShader(11);
  }
  if (key == 'd'){
    setShader(12);
  }
  if (key == 'f'){
    setShader(13);
  }
  /*
  
  if (key == 'v'){
    setShader(3);
    //"noisefactor"
    //"stripes"
    cp5.getController("noiseFactor").setValue(1); // WORKS
  }
  if (key == 'b'){
    setShader(4);
    //coeffx
    //coeffy
    //colormult 2D
  }
  if (key == 'n'){
    setShader(5);
    //noisefactortime
    //noisefactor 2D
  }
  if (key == 'm'){
    setShader(6);
    //"graininess"
    //pace
    //twist
  }
  if (key == ','){
    setShader(7);
    //mx
    //my
  }*/
  if (key == '-'){
    if (drawAlgoText == false){
      drawAlgoText = true;
    } else {
      drawAlgoText = false;
    }
  }
}

public void algoText(){
  fill(0);
  rect(0,height/2.5,width,height/6);
  
  fill(255,255,255);

  textAlign(CENTER);
  text(algoText,width/2,height/2); 

  
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
