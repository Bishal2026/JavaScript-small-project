 const rect = document.querySelector("#center");
 rect.addEventListener("mousemove",function(e){
    let rectloc = rect.getBoundingClientRect();
    let insiderect =  e.clientX - rectloc.left;
    if(insiderect<rectloc.width/2){
        // console.log("left");
        let redcolor = gsap.utils.mapRange(0,rectloc.width/2,255,0,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        })
    }
    else{
        // console.log("right");
        let bluecolor = gsap.utils.mapRange(rectloc.width/2,rectloc.width,0,255,insiderect);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        })
    }
 });
 rect.addEventListener("mouseleave",function(){
   // console.log("ok");
   gsap.to(rect,{
    backgroundColor:"white",
   })
 })

// console.log(gsap.utils.mapRange(0,250,255,0,23));