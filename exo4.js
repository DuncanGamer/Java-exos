// Exercice 4 : 
// boucle do while dans une boucle for, et en utilisant
// 3 variables. [difficile] 

let numero = 6
let esNumeroPrimo = true;

for(let i =2; i < numero; i++){
    if( numero % i === 0){
        esNumeroPrimo = numero;
    }
  
    
}

if(esNumeroPrimo){
    console.log(numero);

}else{
    console.log('no es primo');
}