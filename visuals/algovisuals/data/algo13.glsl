#define PROCESSING_COLOR_SHADER
/*
 * Original shader from: https://www.shadertoy.com/view/WtjGzG
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

// --------[ Original ShaderToy begins here ]---------- //
float rand(vec2 co){
    return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
}

float centerize(float x) {
    float a = 1.5; // 0 < a < 4
    return a*x*x*x - 1.5*a*x*x + (0.5*a+1.)*x;
}

vec3 pieces(vec2 p, vec2 s, vec2 seed, bool simpleForm) {
    float line = 0.1;
    float baseSplit = simpleForm ? 4. : 5.;
    float minimumSplit = simpleForm ? 3. : 2.;
    vec2 complexity = baseSplit * (pow(vec2(rand(seed+0.),rand(seed+1.)),vec2(0.2)) * 0.8 + 0.25);
    vec2 sep = floor(max(vec2(minimumSplit), complexity*pow(s,vec2(0.65))));
    vec3 col = vec3(0);
    
    // Splitting
    seed = floor(seed * 15.) / 15.;
    bool spi = rand(seed+2.) < 0.4;
    float basePattern = spi ? 0.9 : smoothstep(0., 0.2, rand(seed+3.)) * 1.0;
    float sepPattern = spi ? 1.0 : floor((sep.x + sep.y + 2.) * 0.3);
    seed = basePattern + floor(fract(seed*123.456) * sepPattern) * 3.1415 + floor(iTime*0.9+0.5);
    vec3 c = spi ? mix(vec3(0,0.5,1),vec3(1,0.5,1),smoothstep(0.,2.,p.x+p.y)) * 0.8 + 0.2 : vec3(1.0);
    //c = fract(vec3(seed.xy,seed.x+seed.y)*20.*vec3(1.123589,1.589312,1.942012));
    c = vec3(0,0,1); //c=vec3(0);
    
    // Points
    vec2 place = p*s/(s-line)*(sep-1.);
    vec2 pixs = fract(place)*(s-line)/(sep-1.);
    if(rand(seed + floor(place)) < 0.3) {
        col = max(col, max(pixs.x, pixs.y) < line ? c : vec3(0.));
    }
    
    // Random Branching
    vec2 edgeSeed = floor(place);
    edgeSeed += pixs.x < pixs.y ? 3. : 4.;
    float bridge = rand(seed + edgeSeed);
    float bridgeRatio = simpleForm ? 0.9 : 0.9;
    //col = max(col, min(pixs.x, pixs.y) < line && bridge > bridgeRatio ? c : vec3(0.));
    
    // Tree construction
    float mu = 0.478213;
    for(int i=0;i<4;i++) {
        if(i!=0 && rand(seed) < 0.8 || rand(seed+2.) < 0.5) {
            p = p.yx;
            s = s.yx;
            sep = sep.yx;
        }
        float ix = floor(centerize(rand(seed+3.))*(sep.x-1.)+0.5);
        float split = ix/(sep.x-1.)*(s.x-line) + line / 2.;
        col = max(col, distance(p.x*s.x, split) < line / 2. ? c : vec3(0.));
        if(p.x*s.x < split - line/2.) {
            float nsep = ix + 1.;
            float ns = s.x/(s.x-line)*(sep.x-1.) - (sep.x - ix - 1.);
            ns = ns*(s.x-line)/(sep.x-1.);
            p.x = p.x*s.x / ns;
            s.x = ns;
            sep.x = nsep;
            seed = seed + mu;
        } else if(p.x*s.x > split + line/2.) {
            float nsep = sep.x - ix;
            float ns = s.x/(s.x-line)*(sep.x-1.) - ix;
            ns = ns*(s.x-line)/(sep.x-1.);
            p.x = (p.x*s.x - split + line/2.) / ns;
            s.x = ns;
            sep.x = nsep;
            seed = seed - mu;
        } else {
            return col;
        }
        mu /= 2.0;
        if(p.x < 0. || p.x > 1. || p.y < 0. || p.y > 1. || sep.x < 1.5) return col;
    }
    
    return col;
}

vec3 draw(vec2 p, vec2 seed) {
    float d = 1.;
    bool simpleForm = rand(seed-1.) > 0.8;
    bool global = !simpleForm;
    vec3 col = vec3(1);
    vec2 size = vec2(1);
    float mu = sqrt(2.);
    float blank = 0.11;
    bool flipped = false;
    for(int i=0;i<2;i++) {
        bool refuse = false;
        if(global) {
            bool dir = rand(seed) < 0.5;
            if(dir) {
                p = p.yx;
                size = size.yx;
                flipped = !flipped;
            }
            float ratio = rand(seed+1.);
            ratio = ratio < 0.3 ? 0.3
            : ratio < 0.5 ? 0.5
            : 0.65;
            if(size.x < 0.7) ratio = 0.4;
            if(i!=0 &&  dir && size.x < 0.7) refuse = true;
            if(i!=0 && !dir && size.x < 0.7) refuse = true;
            if(!refuse) {
                if(p.x < ratio) {
                    float w = ratio * size.x - blank / 2.;
                    p.x /= w / size.x;
                    size.x *= w / size.x;
                    seed += 0.2;
                } else {
                    float pad = ratio * size.x + blank / 2.;
                    float w = (1.-ratio) * size.x - blank / 2.;
                    p.x -= pad / size.x;
                    p.x /= w / size.x;
                    size.x *= w / size.x;
                }
            }
            seed.xy += ratio * mu * seed.yx;
            if(p.x < 0. || p.x > 1.) {
                col = vec3(0.);
                break;
            }
        }
        mu /= sqrt(3.0);
    }
    if(flipped) {
        p = p.yx;
        size = size.yx;
    }
    col *= pieces(p, size, seed, simpleForm);
    //col.rg *= size;
    float w = 0.1;
    //vec3 col = vec3(1) * smoothstep(w*0.5+0.01,w*0.5-0.01,d);
    return col;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec3 col = vec3(1);
    
    vec2 uv = (fragCoord - iResolution.xy * 0.5) / iResolution.y;
    uv *= 7.0;
    uv.y += iTime-4.;
    vec2 seed = floor(uv+0.5) * 0.1;
    uv = fract(uv+0.5)-0.5;
    uv = uv*1.3;
    float d = max(abs(uv.x),abs(uv.y));
    
    if(d > 0.5) {
        col = vec3(0);
    } else {
        // uv: [-0.5,0.5]^2
        seed.x += floor(iTime*0.9);
        col = draw(uv+0.5, seed);
    }
    
    fragColor = vec4(col,1.0);
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
