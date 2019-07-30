#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
    
    vec2 position = ( gl_FragCoord.xy / resolution.xy );//*mouse.y*30.;
    
    position = 3.0 - 1.0/position;
    
    float x = position.x + time;
    float y = position.y;
    float color = mod( mod(x*y,3.) +x +y, 1.);
    color = fract(color*1.2);
    gl_FragColor = vec4(0,0,color,1);
    
}
