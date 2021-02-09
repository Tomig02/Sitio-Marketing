const button = document.querySelector("#call-to-action");
const foot = document.querySelector("footer");
const minPosition = button.offsetTop + button.offsetHeight;
const maxPosition = foot.offsetTop - 500;
console.log("pos " + maxPosition);
let isFixed = false;


window.addEventListener("scroll", function() {
    console.log(window.scrollY);
    if( (window.scrollY > (minPosition)) & (window.scrollY < (maxPosition)) ) {
        fix();
        isFixed = true;
    }
    else
        if( ((window.scrollY < (minPosition)) || (window.scrollY > maxPosition)) & (isFixed) ) {
            console.log("enter");
            unFix();
            isFixed = false;
        }
});

function fix(){
    button.textContent = "";
    button.classList.add("fixed");
    button.innerHTML = '<i class="icon far fa-envelope fa-2x"></i>';
}
function unFix(){
    button.textContent = "Dejanos ayudarte a crecer";
    button.classList.remove("fixed");
}