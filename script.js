document.getElementById("calc").addEventListener("click", calculate);

let n = document.getElementById("amount");
let q = document.getElementById("quality");

function calculate(){
    
    let tip = (n.value * q.value);
    document.getElementById("res").innerHTML = "Rs " + tip;
}