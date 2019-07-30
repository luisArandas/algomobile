/*
 Adapted from Brandon Fogerty
 xdpixel.com
*/


#ifdef GL_ES
precision mediump float;
#endif
uniform float time;
uniform vec2 resolution;

#define AMP_FALLOFF     (1.0-( clamp( length(uv), 0.0, 1.0 ) ))
#define AMP         1.0 * AMP_FALLOFF
#define K           10.0
#define C           -1.0
#define RADIUS          length( uv )
#define Background_Color    vec3( 0.0, 0.0, 0.1 )


void main() {
                                                // * 1.0 var
    vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 1.0 - 1.0;
    uv.x *= (resolution.x / resolution.y);
    
    float t = AMP * abs( sin( K * (RADIUS) + C * time ) );
    t += abs( tan( uv.y ) * 4.0 );
    
    vec3 finalColor = Background_Color;
    finalColor += vec3( t * 0, t * 0, t * 0.5 );
    
    gl_FragColor = vec4( finalColor, 5 );
}

