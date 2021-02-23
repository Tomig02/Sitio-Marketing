const ctaButton = document.querySelector("#call-to-action");
const minPosition = ctaButton.offsetTop + ctaButton.offsetHeight;
let isFixed = false;


window.addEventListener("scroll", function() {
    if( (window.scrollY > minPosition) ) {
        fix();
        isFixed = true;
    }
    else
        if( (window.scrollY < minPosition) & (isFixed) ) {
            unFix();
            isFixed = false;
        }
});

function fix(){
    ctaButton.textContent = "";
    ctaButton.classList.add("fixed");
    ctaButton.innerHTML = '<i class="icon far fa-envelope fa-2x"></i>';
}
function unFix(){
    ctaButton.textContent = "Dejanos ayudarte a crecer";
    ctaButton.classList.remove("fixed");
}