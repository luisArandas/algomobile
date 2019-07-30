#define PROCESSING_COLOR_SHADER
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define SRC_N 5.0
#define SRC_D .05
#define SRC_R .003
#define SRC_A .4
#define TWO_PI (2.0 * 3.1415)

void main( void ) {
    
    vec2 position = gl_FragCoord.xy / resolution.y;
    float max_x = resolution.x / resolution.y;
    vec2 mouse_p = vec2(mouse.x * max_x, mouse.y);
    
    float q = 0.0;
    float src_f = TWO_PI * mix(2.0, 100.0, mouse.x);
    float src_d = SRC_D * mix(.1, 5.0, mouse.y);
    
    float time = time + position.x*position.x*123.456;
    
    for (float i = 0.0; i < SRC_N; i++) {
        vec2 src_pos = vec2((max_x - src_d * (SRC_N - 1.0)) / 2.0 + float(i) * src_d, 0.5);
        float l = distance(position, src_pos);
        if (l < SRC_R) {
            gl_FragColor = vec4(1.0);
            return;
        }
        q += sin(l * src_f + i * SRC_A - time * 10.0);
    }
    q /= SRC_N;
    gl_FragColor = vec4(q * q);
}
