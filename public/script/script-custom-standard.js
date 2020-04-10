var tl = gsap.timeline({repeat: -1, yoyo: true});


tl.fromTo(".animate", {color: "#020e49"}, {duration: 5, color: "#001ca8"})
tl.fromTo(".animate", {color: "#001ca8"}, {duration: 4, color: "#ffffff"});