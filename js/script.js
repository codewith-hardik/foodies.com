// Active navbar on scroll
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};



// nav hide mobile size
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((e)=>{
    e.addEventListener("click",()=>{
        navCollapse.classList.remove("show");
    })
})



// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration/range));
        let timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current== end){
                clearInterval(timer);
            }
        },step);

    }
    counter("count1",0,2025,3000);
    counter("count2",200,2025,3000);
    counter("count3",3000,7500,2500);
    counter("count4",1000,5025,3000);
})



