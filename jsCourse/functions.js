let myName = "Rihab"
//appel de la fonction
hello(myName);
somme(10,14);

//def de la fonction
function hello (name){
    console.log("Hello " + name)
}

function somme (a,b){
    let somme = a+b;
    console.log("la somme de "+a+" + "+b+" est egale à "+somme)
}