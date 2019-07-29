public void flickrDataOne(){
   
  timeNoWrap += .01; 
  time = timeNoWrap % 1;
  
  fill(#000000); 
  rect(100, 100, 350, height / 35 + 20);

  pg1.beginDraw();
  pg1.clear();
  pg1.noStroke();
  
  for (float i = 0; i < 300; i += 10){
    pg1.fill(255, random(50, 255));
    pg1.rect(width / 25 + i, height / 35, 10, 10);    
    pg1.fill(255, random(50, 255));
    pg1.rect(width / 25 + i, height / 35 + 20, 10, 10);    
  }
  pg1.endDraw();
  image(pg1, 0, 0);
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
  
  txt.beginDraw();
  txt.clear();
  txt.background(255,255,255,random(255));

  txt.stroke(255);
  txt.endDraw();
  image(txt, 200, 200); 
 }


public void setShader(){
  shader.setShaderParameters();
  
  pg.beginDraw();
  pg.shader(shader.shader);
  pg.rect(0, 0, pg.width, pg.height);
  pg.endDraw();
  
  fill(0);
  rect(0, 0, pg.width, pg.height);
  image(pg, 0, 0); 
}
