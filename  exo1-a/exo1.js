

// Exercice 1 : Réaliser des scripts simples avec JavaScript. [facile] 
// a) Ecrire une page HTML contenant un script permettant d’afficher 
// « Bonjour tout le monde »[Saut de retour à la ligne]b) 
// Améliorer le script pour qu’il permette de demander le prénom de 
// l’utilisateur (méthode prompt()) et afficher « Bonjour ‘votre prénom’». 

document.write("Bonjour tout le monde")

let prenom = prompt("Quel est votre prenom?:");

let mesage = "bonjour ";

let result = mesage + prenom;

alert (result);


