const btn = document.getElementById("btn");

/**
 * @param {number} numBox numero di celle
 */

function gridGenerator(numBox) {
    const boxContainer = document.querySelector(".box-container");
    let totBox = numBox*numBox;
    boxContainer.innerHTML = ""

    
    for (let i = 0; i < totBox; i++) {

        boxContainer.innerHTML += `<div class='box ' style='flex-basis: calc(100%/ ${numBox})'> ${i+1}`;

        const divInnerBox = document.querySelector(".box");

        console.log(divInnerBox);

        divInnerBox.addEventListener("click", function(){
            divInnerBox.classList.toggle("bg-primary");
            console.log( i + 1);
        });
    }
}

btn.addEventListener("click", function(){
    btn.classList.toggle("bg-primary");
    btn.classList.toggle("bg-secondary");

    gridGenerator(10);
})


