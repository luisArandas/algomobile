var tl = gsap.timeline({repeat: -1, yoyo: true});

tl.add("color")
tl.fromTo(".letter-a", {fill: "#020e49"}, {duration: 7, fill: "#001ca8"}, "color")
tl.fromTo(".letter-l", {fill: "#020e49"}, {duration: 8, fill: "#001ca8"}, "color")
tl.fromTo(".letter-g", {fill: "#020e49"}, {duration: 6, fill: "#001ca8"}, "color")
tl.fromTo(".letter-o", {fill: "#020e49"}, {duration: 5, fill: "#001ca8"}, "color")
// tl.fromTo(".button-white", {borderColor: "#001ca8", color: "#001ca8"}, {duration: 5, borderColor: "#020e49", color: "#020e49"}, "color")

tl.add("color-2")
tl.fromTo(".letter-a", {fill: "#001ca8"}, {duration: 4, fill: "#ffffff"}, "color-2")
tl.fromTo(".letter-l", {fill: "#001ca8"}, {duration: 5, fill: "#ffffff"}, "color-2")
tl.fromTo(".letter-g", {fill: "#001ca8"}, {duration: 7, fill: "#ffffff"}, "color-2")
tl.fromTo(".letter-o", {fill: "#001ca8"}, {duration: 5, fill: "#ffffff"}, "color-2")
// tl.fromTo(".button-white", {borderColor: "#020e49", color: "#020e49"}, {duration: 5, borderColor: "#ffffff", color: "#ffffff"}, "color-2")

tl.add("color-3")
tl.fromTo(".letter-a", {fill: "#ffffff"}, {duration: 6, fill: "#020e49"}, "color-3")
tl.fromTo(".letter-l", {fill: "#ffffff"}, {duration: 8, fill: "#020e49"}, "color-3")
tl.fromTo(".letter-g", {fill: "#ffffff"}, {duration: 7, fill: "#020e49"}, "color-3")
tl.fromTo(".letter-o", {fill: "#ffffff"}, {duration: 9, fill: "#020e49"}, "color-3")
// tl.fromTo(".button-white", {borderColor: "#ffffff", color: "#ffffff"}, {duration: 5, borderColor: "#020e49", color: "#001ca8"}, "color-3");