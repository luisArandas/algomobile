void setupShaders() {
  GShader newShader;
  shaders = new ArrayList<GShader>();
  
  // blobby
  newShader = new GShader("algo1.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo2.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo3.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo4.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo5.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo6.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo7.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo8.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo9.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo10.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo11.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo12.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo13.glsl");
  shaders.add(newShader);
  
  newShader = new GShader("algo14.glsl");
  shaders.add(newShader);
  
  // drip
 /* newShader = new GShader("drip.glsl");
  newShader.addParameter("intense", 0, 1);
  newShader.addParameter("speed", 0, 1);
  newShader.addParameter("graininess", 0, 1, 0, 1);
  shaders.add(newShader);
  
  // electro
  newShader = new GShader("electro.glsl");
  //newShader.addParameter("rings", 5, 40);
  //newShader.addParameter("complexity", 1, 60);
  shaders.add(newShader);
  
  // bands
  newShader = new GShader("bands.glsl");
  newShader.addParameter("noiseFactor", 5, 100);
  newShader.addParameter("stripes", 0, 100);
  shaders.add(newShader);
  
  // sinewave
  newShader = new GShader("sinewave.glsl");
  newShader.addParameter("colorMult", 0.5, 5.0, 0.5, 2.0);
  newShader.addParameter("coeffx", 10, 50);
  newShader.addParameter("coeffy", 0, 90);
  newShader.addParameter("coeffz", 1, 200);
  shaders.add(newShader);
  
  // water noise
  newShader = new GShader("noisy.glsl");
  newShader.addParameter("noiseFactor", 0, 10, 0, 10);
  newShader.addParameter("noiseFactorTime", 0, 2);
  shaders.add(newShader);
 
  // monjori
  newShader = new GShader("monjori.glsl");
  newShader.addParameter("graininess", 10, 100);
  newShader.addParameter("pace", 20, 80);
  newShader.addParameter("twist", 0, 100);
  shaders.add(newShader);
  
  // bits
  newShader = new GShader("bits.glsl");
  newShader.addParameter("mx", 0, 1);
  newShader.addParameter("my", 0, 1);
  shaders.add(newShader);
  */
  newShader = new GShader("algo1.glsl");
  shaders.add(newShader);
}


void setShader(int idxNextShader) {
  if (idxShader > -1)
    shader.removeGui();
  idxShader = idxNextShader;
  shader = shaders.get(idxShader); 
  shader.addGui();
}
