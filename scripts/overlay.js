const overlay= document.querySelector(".overlay");
const button= document.querySelector(".burger");


button.addEventListener("click", () => {
    if(overlay.classList.contains("overHiden")){
        button.classList.add("bg-flip")
        overlay.classList.remove("overHiden");
    }else{
        button.classList.remove("bg-flip")
        overlay.classList.add("overHiden");
    }   
});