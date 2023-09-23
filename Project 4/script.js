const rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(e){

    let xval = gsap.utils.mapRange(0,this.window.innerWidth,100+rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),e.clientX);
   gsap.to("#rect",{
    left:xval,
     ease:Power3,
   })

})