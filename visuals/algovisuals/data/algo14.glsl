#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
#endif

//https://thebookofshaders.com/edit.php#10/ikeda-04.frag
//https://thebookofshaders.com/10/

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

float random (in float x) { return fract(sin(x)*1e4); }
float random (in vec2 _st) { return fract(sin(dot(_st.xy, vec2(12.9898,78.233)))* 43758.5453123);}

void main() {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    st.x *= resolution.x/resolution.y;
    
    // Grid
    vec2 grid = vec2(100.0,50.);
    st *= grid;
    
    vec2 ipos = floor(st);  // integer
    
    vec2 vel = floor(vec2(time*10.)); // time
    vel *= vec2(-1.,0.); // direction
    
    vel *= (step(1., mod(ipos.y,2.0))-0.5)*2.; // Oposite directions
    vel *= random(ipos.y); // random speed
    
    // 100%
    float totalCells = grid.x*grid.y;
    float t = mod(time*max(grid.x,grid.y)+floor(1.0+time*mouse.y),totalCells);
    vec2 head = vec2(mod(t,grid.x), floor(t/grid.x));
    
    vec2 offset = vec2(0.1,0.);
    
    vec3 color = vec3(1);
    color *= step(grid.y-head.y,ipos.y);                                // Y
    color += (1.0-step(head.x,ipos.x))*step(grid.y-head.y,ipos.y+1.);   // X
    color = clamp(color,vec3(0.),vec3(1.));
    
    // Assign a random value base on the integer coord
    color.r *= 0;//(random(floor(st+vel+offset)));
    color.g *= 0;//random(floor(st+vel));
    color.b *= 1;
    
    color = smoothstep(0.,.5+mouse.x/resolution.x*.5,color*color); // smooth
    color = step(0.5+mouse.x/resolution.x*0.5,color); // threshold
    
    //  Margin
    color *= step(.1,fract(st.x+vel.x))*step(.1,fract(st.y+vel.y));
    
    gl_FragColor = vec4(color,1.0);
}