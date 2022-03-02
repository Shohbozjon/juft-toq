var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elSpan= document.querySelector(".form__span")

var juft = []
var toq = []

elForm.addEventListener("submit", function(event){
    event.preventDefault();
    
    if (elInput.value % 2 == 0){
        elSpan.textContent = elInput.value + " soni juft";
        juft.push(elInput.value);
        console.log(juft);
        
    } else {
        elSpan.textContent = elInput.value + " soni toq";
        toq.push(elInput.value);
        console.log(toq);
    }

     elInput.value = "";
})


