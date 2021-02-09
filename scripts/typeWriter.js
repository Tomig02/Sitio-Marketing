const array = ["Creatividad.", "Rapidez.", "Calidad."];
let count = 0;
let index = 0;
let text = "";
let char = "";
let deleting = false;


(function typeWriter(){
    if(count === array.length){
        count = 0;
    }
    text = array[count];

    if(deleting){
        char = text.slice(0, --index);
        if(char.length === 1){
            deleting = false;
            count++;
        };
    } else{
        char = text.slice(0, ++index);
        if(char.length === text.length){
            deleting = true;
        };
    }

    document.querySelector(".typewriter").textContent = char;
    
    setTimeout(typeWriter, 200);
})();
