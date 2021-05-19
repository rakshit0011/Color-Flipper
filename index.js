const colors = ['aqua','chartreuse','red','orange','green','blue','purple','pink'];
const hex = ['#bfff00','#ffff00','#ff4000','#61fdf7','#ff0080','#bf00ff','#00FF00',
            '#00d15c'];

// Add functioning to the Simple button
const simpleBtn = document.getElementById("btn-1");
simpleBtn.addEventListener("click",function(){
    let randN = Math.random();
    randN = Math.floor(randN*8);
    let curColor = document.querySelector(".container-1");
    curColor.style.backgroundColor = colors[randN];
    curColor.innerHTML = colors[randN];
})


// Hex Button
const hexBtn = document.getElementById("btn-2");
hexBtn.addEventListener("click",function(){
    let bt0 = document.querySelector(".container-1");
    let randN1 = Math.floor(Math.random()*8);
    bt0.style.backgroundColor = hex[randN1];
    bt0.innerHTML = hex[randN1];
})


// Reset button
const resetBtn = document.getElementById("btn-4");
resetBtn.addEventListener("click",function(){
    let bt = document.querySelector(".container-1");
    bt.style.backgroundColor = "unset";
    bt.innerHTML = "Click on the buttons to change color";
})
