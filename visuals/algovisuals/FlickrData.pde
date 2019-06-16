public void flickrDataOne(){
   
  timeNoWrap += .01; 
  time = timeNoWrap % 1;
  
  fill(#D8D8D8, 255); 
  rect(40, 10, 350, height / 35 + 20);
  
  lineOffset += ((floor(((lines.length) / 2) * timeNoWrap)) - lineOffset) * .5;

  pg.beginDraw();
  pg.clear();
  pg.noStroke();
  pg.fill(200);
  
  for (float i = 0; i < 300; i += 10){
    pg.fill(255, random(50, 255));
    pg.rect(width / 25 + i, height / 35, 10, 10);    
    pg.fill(255, random(50, 255));
    pg.rect(width / 25 + i, height / 35 + 20, 10, 10);    
  }
  pg.fill(1);
 
  
  pg.noFill();
  pg.stroke(0);
  pg.strokeWeight(6);
  pg.stroke(0, 10);
  pg.endDraw();
  
  tint(255, 255, 255, 20);
  image(pg, 0, 0);
  tint(0);
  image(pg, 0, 0);
}
/*
public void flickrDataTwo(){
  
  fill(#ffffff, 255); 
  rect(40, 0, width/2, height/2);
  
  txt.beginDraw();
  txt.clear();
  txt.noStroke();
  txt.fill(0);
 
  
  txt.clip(0, height / 25 + 40, width, 160);
  for (float j = 0; j < lines.length + 3; j++){
    int lineI = (int(j) + int(lineOffset)) % lines.length;
    for (float i = 0; i < lines[lineI].length(); i ++){
      if (lines[lineI].charAt(int(i)) == 'X')
      txt.rect(width / 25 + i * 5, height / 25 + 30 + j * 10 - (lineOffset * 10) % 10, 5, 5);    
   }
  }
  
  pg.fill(1);
 
  pg.clip(0, 0, width, height);
  
  pg.noFill();
  pg.stroke(0);
  pg.strokeWeight(3);
  pg.stroke(0, 10);
  pg.endDraw();
  
  tint(255, 255, 255, 20);
  image(pg, 4, 0);
  tint(0);
  image(pg, 0, 0);
}

*/


/* ------------- */

int d = 50;


public void wierdShapes(){
  
   for (int x = 25; x <= width; x += d) {
    for (int y = 25; y <= height; y += d) {
 
      if (random(3) < 1) {
        noFill();
        rect(x, y, d, d);
 
      } else if ((random(3) > 1) && (random(3) < 2)) {
        noFill();
        rectMode(CENTER);
        rect(x, y, d, d);
 
      } else if ((random(3) > 2) && (random(3) < 3)) {
        fill(255, 255, 255, random(255));
        rect(x, y, d, d);
 
        // line(x,y,d,d);
        // line(x+50, y, x, y+50)
      }
 
      // line(0, 0, 50, 50); // x shape
      // line(0, 50, 50, 0);
    }
  }
}
