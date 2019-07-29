// Electrocardiogram Effect
// Imported from http://www.geeks3d.com/20111223/shader-library-electrocardiogram-effect-glsl/

#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
//precision lowp float;
//precision highp float;
#endif

uniform float time;


void main() {
    gl_FragColor = vec4(0,0,abs((sin(time))/2),1);
    //gl_FragColor = vec4(0,0,abs(sin(time)),1);

}
