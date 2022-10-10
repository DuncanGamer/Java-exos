
// Exercice 5 : boucle for (insertion des balises HTML dans les scripts). [moyen] 

// Ecrire une page HTML faisant apparaitre la table de multiplication pour les 
// entiers compris entre 1 et 9 et présenter le résultat dans un tableau [10 x 10]. 

let table = 7;
let quantite = 10;

for(let i= 1; i<quantite; i++){
    document.write(table+"x"+i+"="+(table*i)+"<br>");
}