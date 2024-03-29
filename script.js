
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const skewcircle=()=>{
    var xScale=1;
    var yScale=1;
    var preX=0;
    var preY=0;
    window.addEventListener("mouseover",(det)=>{

            var diffX=det.clientX-preX;
            var diffY=det.clientY-preY;
            xScale=gsap.utils.clamp(.8,1.2,diffX);
            yScale=gsap.utils.clamp(.8,1.2,diffY);
            preX=det.clientX;
            preY=det.clientY;
            mouseTracker(xScale,yScale);      
    })
}
skewcircle();

let mini=document.querySelector(".minicircle");

const mouseTracker=(xScale,yScale)=>{
    window.addEventListener("mousemove",(details)=>{
        mini.style.transform=`translate(${details.clientX}px, ${details.clientY}px) scale(${xScale},${yScale})`;
    })
}
mouseTracker();

function firstPageAnim(){

    var tl=gsap.timeline();

    tl.from(".nav",{
        y: '-10',
        opacity: 0,
        duration: 1.8,
        ease :Expo.easeInOut
    })
    .to(".boundingelem",{
        y: '0',
        opacity: .7,
        duration: 1.9,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .to("#one",{
        y:'0',
        opacity: 10,
        ease: Expo.easeInOut,
        duration: 1.2,
    })
    
}
firstPageAnim();

document.querySelectorAll(".ele").forEach((elem)=>{
    elem.addEventListener("mousemove",(dets)=>{
        var diff=dets.clientY - elem.getBoundingClientRect().top;
        let imgs=elem.querySelector("img");
        imgs.style.opacity=10;
        imgs.style.transform=`translate(${dets.clientX}px,${diff}px)`;
       
    })
})

