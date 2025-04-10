


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#FF6EC7"
        },
        "line_linked": {
            "enable": true      , // Ativar linhas entre partículas
            "distance": 130,
            "color": "#FF6EC7",
            "opacity": 0.5,
            "width": 1
        },
        "shape": {
            "type": "circle", // Outras opções: "triangle", "star", "polygon", "edge"
            "polygon": {
                "nb_sides": 5 // Número de lados para polígonos
            },
            "stroke": {
                "width": 0, // Contorno das partículas
                "color": "#000000"
            },
            "image": {
                "src": "", // Caminho da imagem para partículas personalizadas
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.4,
            "random": false, // Ativar opacidade aleatória
            "anim": {
                "enable": true, // Ativar animação de opacidade
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": false, // Ativar tamanhos aleatórios
            "anim": {
                "enable": false, // Ativar animação de tamanho
                "speed": 2,
                "size_min": 0.5,
                "sync": false
            }
        },
        "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none", // Outras opções: "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
            "random": false, // Movimento aleatório
            "straight": false, // Movimento em linha reta
            "out_mode": "out", // Outras opções: "bounce"
            "bounce": true, // Ativar colisão com bordas
            "attract": {
                "enable": false, // Ativar atração entre partículas
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false, // Ativar interações ao passar o mouse
                "mode": "repulse" // Outras opções: "grab", "bubble"
            },
            "onclick": {
                "enable": false, // Ativar interações ao clicar
                "mode": "push" // Outras opções: "remove", "repulse", "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 250,
                "size": 8,
                "duration": 2,
                "opacity": 0.8,
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
});


