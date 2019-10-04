#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
                 43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/    resolution.xy;
    
    float rnd = random( st );
    
    gl_FragColor = vec4(vec3(rnd),1.0);
}