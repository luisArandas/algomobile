#ifdef GL_ES
precision mediump float;
#endif
uniform float time;

void main() {
    vec2 st = gl_FragCoord.xy*sin(time);
    gl_FragColor = vec4(0,0,tan(st.x),1.0);
}
