const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const quEL = document.getElementById("question"); 
const inpEL = document.getElementById("input");
const forEL = document.getElementById("form");
const scEL = document.getElementById("score")
quEL.innerText =`what is ${num1} multiply by ${num2}`;
let score = JSON.parse( localStorage.getItem("score")) ; 
if(!score){
    score=0;
}
scEL.innerText=`score: ${score}`
const corrAns = num1 * num2 ;
forEL.addEventListener("submit",()=>{
    const useAns = +inpEL.value;
    if( useAns === corrAns){
        score += 1 ; 
        updatelocalstorage();

    } else {
        score -= 1 ; 
        updatelocalstorage();
    }
    console.log(score);
})
function updatelocalstorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
