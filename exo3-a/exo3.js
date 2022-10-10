// Exercice 3 : Réaliser des conditions (if/else). [moyen] 

// Ecrire un script demandant de l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré 
// (si l’âge est erroné afficher un message d’erreur et redemander de saisir l’âge). 

// let age = parseInt ( prompt (" quelle est votre age?: "))

// let correct = prompt ("votre age est " +age ) 

// if (correct === "oui") {
//    alert ("tout est correct")

// }else {
//     let age = parseInt ( prompt (" quelle est votre age?: "))

// }




function control(age = parseInt(prompt(" quelle est votre age?: "))) {
    if (age === 5) {
        alert("votre age est correct")
    }
    else {
        let age = parseInt(prompt(" quelle est votre age?: "))
    
    }
}
control()
