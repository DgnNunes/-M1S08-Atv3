document.addEventListener("DOMContentLoaded", function() {
   
    let novoElemento = document.createElement("span");

    console.log(novoElemento);

    novoElemento.textContent = "Elemento Filho!";

    let elementoPai = document.getElementById("elementoPai");
    
    console.log(elementoPai);

    elementoPai.appendChild(novoElemento);
});