/*gsap.from("#centre h1",{
    opacity:0,
    color:"green",
    duration:2
})
gsap.to("#centre h1",{
    color:"blue",
    duration:3
})
gsap.from("#nav",{
    y:20,
    duration : 3
})*/
var tl= gsap.timeline()
tl
   .from("#nav",{
    opacity:0,
    y:20,
    duration:2
   })
   .from("#nav2",{
    opacity:0,
    y:20,
    duration:2
   })
  .from("#centre h1",{
    opacity:0,
    scale:1.3,
    duration:1
   })
   .from("#centre button",{
    y:20,
    opacity:0
   })
   .from(["#bag","#four"],{
    x:-60,
    opacity:0,
    scale:1.6,
    duration:2
   })
   .from(["#flower","#perfume"],{
    x:-60,
    opacity:0,
    scale:1.6,
    duration:2,
    delay:"-1"
   })
   .from("#centre #arrow",{
    scale:0.1,
    opacity:0,
    yoyo:"true",
    repeat:"1"
   })