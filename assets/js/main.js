let output = document.getElementById("Ausgabe")
let Comma = document.getElementById("Comma")
let Equal = document.getElementById("Equal")


function getNumber (x){
    output.value = output.value+x
}
function clearOutput (){
    output.value = ""
}
function calcul (){
    output.value = eval(output.value)
}