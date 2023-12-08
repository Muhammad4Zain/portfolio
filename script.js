
function valueSetters() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" });
    gsap.set("#home .row #arrow", { opacity: 0 }); // Opacity set to 0
}


function revealToSpan() {
    document.querySelectorAll(".reveal").forEach(function (element) {
        var parent = document.createElement("span"); // Use a div instead of a comment
        var child = document.createElement("span"); // Use a span or another suitable element

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML = element.innerHTML;
        parent.appendChild(child);

        element.innerHTML = "";
        element.appendChild(parent);
    });

}

function loaderAnimation() {

    var timeline = gsap.timeline();

    timeline.eventCallback("onStart", function () {
        document.body.classList.add("animating");
    });

    timeline.eventCallback("onComplete", function () {
        document.body.classList.remove("animating");
    });

    timeline.from("#loader .child span", {
        x: 40,
        delay: .2,
        duration: 1,
        stagger: .2,
        ease: Power3.easeInOut

    })

    timeline.to("#loader .parent .child", {
        y: "-100%",
        duration: .5,
        ease: Circ.easeInOut
    })

    timeline.to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })

    timeline.to("#blue", {
        top: 0,
        height: "100%",
        duration: 1,
        delay: -1,
        ease: Circ.easeInOut

    })

    timeline.to("#blue", {
        height: 0,
        delay: -.5,
        duration: .5,
        ease: Circ.easeInOut,

        onComplete: function(){
            animateHomepage()
        }
    })
}

function animateHomepage() {
    var tl = gsap.timeline();
    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: Expo.easeInOut
    })
    .to("#home .parent .child", {
        y: 0,
        stagger: 0.1,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -.7,
    })
    .to("#home .row #arrow", {
        opacity: 1, // Animating opacity to 1
        ease: Expo.easeInOut
    });
}


function locoinitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#home'),
        smooth: true
    });
}

var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})

var crsr = document.querySelector(".cursor")
var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})


revealToSpan()
valueSetters()
loaderAnimation()
locoinitialize()

