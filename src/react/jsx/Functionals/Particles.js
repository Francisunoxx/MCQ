import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesBackground extends Component {
    render() {
        return (
            <Particles
                params={{
                    particles: {
                        "number": {
                            "value": 355,
                            "density": {
                                "enable": true,
                                "value_area": 789.1476416322727
                            }
                        },
                        "color": {
                            "value": "#039be5"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            }
                        },
                        "opacity": {
                            "value": 2,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "size_min": 2,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.5,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 83.91608391608392,
                                "size": 1,
                                "duration": 3,
                                "opacity": 1,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }} style={{"position": "absolute"}} />
        )
    }
}


export default ParticlesBackground;