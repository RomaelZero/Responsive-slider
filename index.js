const btn = document.getElementById("btn");
const sideBar = document.querySelector(".main-container");
const allIcons = document.querySelectorAll("li");
        
btn.addEventListener("click",()=>{
    sideBar.classList.toggle("active");  
});

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
    const icon = tooltip.previousElementSibling;
    icon.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
});

icon.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
});


});
