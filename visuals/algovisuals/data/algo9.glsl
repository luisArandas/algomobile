#define PROCESSING_COLOR_SHADER

#ifdef GL_ES
precision mediump float;
#endif

//http://glslsandbox.com/e#56211.0

uniform float time;
uniform vec2 resolution;

void main()
{
    vec2 uv = (gl_FragCoord.xy * 4.0 - resolution) / min(resolution.x, resolution.y);
    vec2 f = vec2(1.3);
    vec3 c = vec3(0, 0, 3);
    float light = 0.0;
    
    for (float x = 0.1; x < 6.0; x += 1.0)
    {
        f = vec2(cos(cos(time + uv.x * x) - uv.y * dot(vec2(x + uv.y), vec2(sin(x), cos(x)))));
        light += (0.04 / distance(uv, f)) - (0.01 * distance(vec2((cos(time + uv.y))), vec2(uv)));
        c.y = sin(time + x) * 0.2 + 0.6;
    }
    
    c *= light;
    
    gl_FragColor = vec4(c, 50);
}
