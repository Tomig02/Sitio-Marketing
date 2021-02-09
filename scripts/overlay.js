const overlay= document.querySelector(".overlay");
const callToAction= document.querySelector("#call-to-action");


callToAction.addEventListener("click", function(){
    overlay.style.display = "block";
});
overlay.addEventListener("click", function(e){
    const tar = e.target.classList.value;
    if(tar === "overlay"){
        overlay.style.display = "none";       
    }
});