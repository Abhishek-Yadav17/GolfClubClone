let nav = document.querySelectorAll("#nav h4")
let crsr = document.querySelector("#cursor")

nav.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        elem.style.color = "#000"
    })
    elem.addEventListener("mouseleave", () => {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #96c11e"
        crsr.style.backgroundColor = "#96c11e"
        elem.style.color = "#fff"
    })
})


document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        left:dets.x-10,
        top:dets.y-10
    })
    gsap.to("#cursor-blur", {
        left:dets.x-150,
        top:dets.y-150
    })
})



gsap.to("#nav", {
    height:"100px",
    backgroundColor:"black",
    duration:0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main", {
    backgroundColor:"black",
    duration:0.5,
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -90%",
        scrub:1
    }
})


gsap.to("#colon1", {
    y:40,
    x:40,
    duration:0.5,
    scrollTrigger: {
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 50%",
        scrub:1
    }
})

gsap.to("#colon2", {
    y:-60,
    x:-60,
    duration:0.5,
    scrollTrigger: {
        trigger:"#colon2",
        scroller:"body",
        scrub:1
    }
})

gsap.from("#about-us img, #about-us-in", {
    y:100,
    duration:0.5,
    opacity:0,
    scrollTrigger: {
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

let elem = document.querySelectorAll(".elem")
let elemh1 = document.querySelector("#page4 h1")

elem.forEach((data) => {
    data.addEventListener("mouseenter", () => {
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    data.addEventListener("mouseleave", () => {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #96c11e"
        crsr.style.backgroundColor = "#96c11e"
    })
})