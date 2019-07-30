#define PROCESSING_COLOR_SHADER

/*
 * Original shader from: https://www.shadertoy.com/view/4s33Rn
 */

#ifdef GL_ES
precision mediump float;
#endif

// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy emulation
#define iTime time
#define iResolution resolution


vec3 color = vec3(0, 0, 1);

float rand(float x) { return fract(sin(x) * 10); }
float rand(vec2 co) { return fract(tan(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5357); }

float invader(vec2 p, float n) {
    
    p.x = abs(p.x);
    p.y = floor(p.y - 5.0);
    return step(p.x, 2.0) * step(1.0, floor(mod(n/(exp2(floor(p.x - 3.0*p.y))),2.0)));
}

/*float ring(vec2 uv, float rnd) {
    
    float t = 0.6*(iTime+0.2*rnd);
    float i = floor(t/2.0);
    vec2 pos = 2.0*vec2(rand(i*0.123), rand(i*2.371))-1.0;
    return smoothstep(0.2, 0.0, abs(length(uv-pos)-mod(t,2.0)));
}*/

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    
    vec2 p = fragCoord.xy;
    vec2 uv = p / iResolution.xy - 0.5;
    p.y += 120.0*iTime;
    float r = rand(floor(p/8.0));
    vec2 ip = mod(p,8.0)-4.0;
    
    float a = -0.3*smoothstep(0.1, 0.8, length(uv)) +
    //invader(ip, 809999.0*r) * (0.06 + 0.3*ring(uv,r) + max(0.0, 0.2*sin(10.0*r*iTime)));
    invader(ip, 809999.0*r) * (0.06 + 0.3 + max(0.0, 0.2*sin(10.0*r*iTime)));

    fragColor = vec4(color+a, 1.0);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
