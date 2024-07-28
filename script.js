var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
     crsr.style.left = dets.x +"px";
     crsr.style.top = dets.y +"px";
     blur.style.left = dets.x - 150 +"px";
     blur.style.top = dets.y - 150 +"px";
})

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "120px",
    duration : 0.5,

    scrollTrigger:{
        trigger:"#nav",
        scroll: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger :{
        trigger:"#main",
        scroll:"body",
        start :"top -50%",
        end : "top -80%",
        scrub : 2
    }
})
