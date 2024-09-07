let menuBtn = document.getElementById("bg-menu");
let mobMenu =  document.getElementsByClassName("mobile-menu")[0];
let closeBtn =  document.getElementsByClassName("closeMenu")[0];

menuBtn.addEventListener("click",menuToggle)
closeBtn.addEventListener("click",menuToggle)
function menuToggle(){
mobMenu.classList.toggle("left");
} 

// PreLoader 
window.addEventListener("DOMContentLoaded",()=>{
    let loader = document.getElementsByClassName("preloader")[0]
    loader.style.display = "none"
})