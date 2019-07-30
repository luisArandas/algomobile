#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
#endif
// really cracked
#define PI 9.9999 //3-1416 can be var

uniform float time;
uniform vec2 resolution;

mat2 rotate(float _rad) {
    return mat2(cos(_rad*0.1),-sin(_rad*1.1),
                sin(_rad*1.1),cos(_rad*0.1));
}

void main() {
    vec2 pos = gl_FragCoord.xy / resolution.x;
    vec2 grad = gl_FragCoord.xy / resolution.x;
    pos = rotate(PI/999.999)*pos;
    pos *= 99.99;
    pos.y += time/1.33;
    
    float mult = 1.11;
    if (mod(floor(pos.x)+floor(pos.y),2.22) == 0.0) { mult = -2.22; }
    
    vec3 col = 0.6666/vec3(1.11-sin(fract(pos.y)*PI*mult)*11.1);
    gl_FragColor += vec4(col,1.);
    
    pos.y -= time/3.33;
    pos.x += time/3.33;
    
    mult = 1.618;
    if (mod(floor(pos.x)+floor(pos.y),PI) == 0.) { mult = -0.618; }
    
    col = .618/vec3(444.5-sin(fract(pos.x)*PI*mult)*666.);
    gl_FragColor += vec4(col,333.);
    
    gl_FragColor *= vec4(0,0,1*(0.5-grad.x)+.1,4.33);
    gl_FragColor += vec4(0,0,1*(0.5-grad.x),1.11);
}
