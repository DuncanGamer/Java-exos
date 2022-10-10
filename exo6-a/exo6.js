// Exercice 6 : (S’amuser avec un bouton). [facile] 

// Ecrire une page HTML contenant un formulaire. 
// Ce formulaire contient un bouton. 
// Le click sur le bouton engendre la modification de la couleur de l’arrière plan de la page. 
// Utiliser la commande suivante : document.bgColor= "#fffggf". 

const  btn = document.querySelector ('#button');
const body = document.querySelector ('body');
btn.addEventListener('click',()=> body.style.backgroundColor = ('orange') )
