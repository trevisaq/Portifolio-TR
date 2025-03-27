particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 900
            }
        },
        "color": {
            "value": "#ffffff"
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
            "random": true, // Ativar opacidade aleatória
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
        "line_linked": {
            "enable": true      , // Ativar linhas entre partículas
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none", // Outras opções: "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
            "random": false, // Movimento aleatório
            "straight": false, // Movimento em linha reta
            "out_mode": "out", // Outras opções: "bounce"
            "bounce": false, // Ativar colisão com bordas
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
