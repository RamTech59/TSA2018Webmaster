export default {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable":true,
        "value_area":1500,
      }
    },
    "color": {
      "value":"#45b1a3"
    },
    "shape": {
      "type":"circle",
      "stroke": {
        "width":3,
        "color":"#45b1a3"
      },
      "polygon": {
        "nb_sides":5
      }
    },
    "opacity": {
      "value":0.5,
      "random":false,
      "anim": {
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size": {
      "value":3,
      "random":false,
      "anim": {
        "enable":true,
        "speed":5,
        "size_min":1,
        "sync":true
      }
    },
    "line_linked": {
      "enable":true,
      "distance":150,
      "color":"#45b1a3",
      "opacity":.7,
      "width":1
    },
    "move": {
      "enable":true,
      "speed":5,
      "direction":"none",
      "random":false,
      "straight":false,
      "out_mode":"out",
      "bounce":false,
      "attract": {
        "enable":false,
        "rotateX":600,
        "rotateY":1200
      }
    }
  },
  "interactivity": {
    "detect_on":"canvas",
    "events": {
      "onhover": {
        "enable":true,
        "mode":"grab"
      },"onclick": {
        "enable":true,
        "mode":"push"
      },
      "resize":true
    },
    "modes": {
      "grab": {
        "distance":200,
        "line_linked": {
          "opacity":.6
        }
      },
      "bubble": {
        "distance":400,
        "size":40,
        "duration":2,
        "opacity":8,
        "speed":3
      },
      "repulse": {
        "distance":1,
        "duration":1
      },
      "push": {
        "particles_nb":4
      },
      "remove": {
        "particles_nb":2
      }
    }
  },
  "retina_detect":true
}
