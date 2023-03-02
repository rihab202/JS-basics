//Les objets

let etudiant = {nom : "Ezzina" ,
    prenom : "Rihab",
    age : 26,
    engaged : false
};
console.log(etudiant.nom);
//ou
console.log(etudiant['prenom']);
console.log(etudiant);

//methods
let personne = {
    firstName : 'ali',
    lastName : 'zouaoui',
    hello : function(){
        console.log("hello obj");
    },
    fullName : function(){
        console.log(this.firstName + " " + this.lastName);
    }
}
personne.fullName();