
$(function() {
    $('.selector').animatedHeadline({
        animationType: 'clip'
    });
});

let nav=document.querySelector("nav")
window.addEventListener('scroll' ,function () {
    if (window.scrollY >= 25) {
        nav.classList.add("scroll")
    }
    else{
        nav.classList.remove("scroll")
    }
})


let sections=document.querySelectorAll("section");
let navsLink=document.querySelectorAll("nav .navbar-nav a")


window.addEventListener('scroll' ,function () {
        sections.forEach((e)=>{
            let top=window.scrollY;
            let offset=e.offsetTop;
            let height=e.offsetHeight;
            let id =e.getAttribute("id")
            if(top>=offset-200 && top< offset+height){
                navsLink.forEach((links)=>{
                    links.classList.remove("active")
                    document.querySelector("nav .navbar-nav a[href*="+id+"]").classList.add("active")
                    
                })
            }
        })
})



// start about


let section = document.querySelector(".skills");

let spans = document.querySelectorAll(".progress span");
    window.addEventListener('scroll' ,function () {
    if (window.scrollY >= section.offsetTop-500) {
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
    });
    }
})




let videos=document.querySelector(".video")

videos.addEventListener("click",(e)=>{
    let overlay = document.createElement("div");
    overlay.className = "video-overlay";
    document.body.appendChild(overlay);
    let videoBackground = document.createElement("div");
    videoBackground.className = "videoBackground";
    let video = document.createElement("video");
    video.src = "./about.mp4";
    video.controls = true
    video.autoplay=true;
    videoBackground.appendChild(video);
    document.body.appendChild(videoBackground);
    overlay.onclick=function(){
        videoBackground.remove()
        overlay.remove()
    }
})


// finish about







    // start protofolio

let protofolioImage=document.querySelectorAll(".protofolio-image");
let image=document.querySelectorAll(".protofolio-image img")
console.log(image[0].src);
let select=document.querySelectorAll(".select");

protofolioImage.forEach((e)=>{
    e.addEventListener("click",function(){
        console.log(e);
        let overlay = document.createElement("div");
        overlay.className = "video-overlay";
        document.body.appendChild(overlay);
        let imageBackground = document.createElement("div");
        imageBackground.className = "videoBackground";
        let img = document.createElement("img");
        img.src=image[0].src
        console.log(img);
        

        document.body.appendChild(imageBackground);
        overlay.onclick=function(){
            imageBackground.remove()
            overlay.remove()
        }
    })
   
})


select[0].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        protofolioImage[i].style.display="block"
    }
    if(select[0].classList.contains("active")!==true){
        select[0].classList.add("active")
        select[1].classList.remove("active")
        select[2].classList.remove("active")
        select[3].classList.remove("active")
    }
}
select[1].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==2||i==5){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[1].classList.contains("active")!==true){
        select[1].classList.add("active")
        select[0].classList.remove("active")
        select[2].classList.remove("active")
        select[3].classList.remove("active")
    }
    
}
select[2].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==1||i==4||i==6){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[2].classList.contains("active")!==true){
        select[2].classList.add("active")
        select[0].classList.remove("active")
        select[1].classList.remove("active")
        select[3].classList.remove("active")
    }
    
}
select[3].onclick=function(){
    for(let i=0;i<protofolioImage.length;i++){
        if(i==0||i==3){
            protofolioImage[i].style.display="block"
        }
        else{
            protofolioImage[i].style.display="none"
        }
    }
    
    if(select[3].classList.contains("active")!==true){
        select[3].classList.add("active")
        select[0].classList.remove("active")
        select[1].classList.remove("active")
        select[2].classList.remove("active")
    }
    
}



    let nums = document.querySelectorAll(".after-pro .num");
let afterPro = document.querySelector(".after-pro");
let started = false; 

window.onscroll = function () {
    if (window.scrollY >= afterPro.offsetTop-400) {
    if (!started) {
        nums.forEach((num) => startCount(num));
    }
    started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, Math.floor(5000 / goal));
}

    // finish protofolio



    // swapping
        let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        });
            // swapping
