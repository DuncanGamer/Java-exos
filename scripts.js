// CONDICIONALES
// /**
//  * In vitacion a una fiesta 
//  * Si eres mayor de edad y menor de 65 puedes venir a la fiesta
//  * Si no si tienes permiso firmado de tus padres puedes venir
//  * si no quedate en casa
//  */

//  let persona = "Ana"
//  let edad = 80
// let permiso = true

// if (edad>18&&edad<65){
//     console.log(`${persona} puedes venir a la fiesta`)
//  }  else if (permiso ===true && edad<18){
//     console.log(`${persona} puedes venir tienes permiso`)
//  }else{
//     console.log(`${persona} mejor quedate en casa`)
//  }

// if 
// if else 
// if else if 

// CONDICIONALES MILTIPLES 
// PERSONAJE DE DRAGON BALL Z ERES

// /** SI ERES FUERTE Y COMILON ERES GOKU
//  * SI ERES VELOZ Y EGOISTA ERES VEGETA
//  * SI ERES PEQUENO Y DEBIL ERES KRILIN
//  * SI NO ERES NINGUNO ERES UNA SABANDIJA
//  */

// let personalidad = "eres veloz y tonto"
// switch (personalidad) {
//     case "Fuerte y comelon":
//       console.log("Eres Goku")
//         break
//     case " Pequeno y debil":
//     console.log("eres krilin")
//         break
//     case "eres veloz y egoista":
//     console.log("eres Vegeta")
//     break
//     default:
//         console.log("eres una sabandija ")
// }
// CICLOS BUCLES O LOOPS HACEMOS REFERENCIA A BLOQUES DE CODIGO QUE SE REPITEN.

// LA PALABRA RESERVADA ES for

// for(valor de inicializacion; condicion; incremento de valor){

// }
// for(let index = 0; index < 10; index++){
//     console.log(index)

// }

// dado un texto deseamos imprimir su contenido letra por letra.

//  let texto = "danielgimenez"

//  for(let i = 0; i< texto.length; i++){
//     console.log(texto[i])
// }

// CICLO WHILE
// REGALAR JUGUETES

// let juguetes = 10

// while (juguetes > 0) {
//     jugutes--
//     console.log(`regalamos un juguete, nos quedan ${juguetes}`)
// }

// FUNCIONES

// Declaracion de la funcion saludar

// function saludar () {
//     console.log ("Hola muy buenos dias")
// }

// // LLamado a la funcion saludar
// saludar()

// FUNCIONES-PARAMETROS
// las funciones parametros

// function saludar (nombre) {
//     if (typeof nombre === "string"){
//         console.log (`Hola ${nombre} muy buenos dias`)
//     } else{
//         console.log ("Escriba un nombre correcto")
//     }
   
// }
// saludar()

// FUNCIONES-VALORES DE RETORNO

// function obtener_nombre_completo(nombre, apellidos) {
//     return `${nombre} ${apellidos}` 
// }
// console.log(obtener_nombre_completo("Daniel","Gimenez"))

// FUNCIONES-CIUDADANOS DE PRIMERA CLASE.
// En lenguaje de programacion los tipos de datos primitivos 
// se consideran CIUDADANOS DE PRIMERA CLASE
// Todos los datos que se pueden guardar dentro de una variable
// se consideran CIUDADANOS DE PRIMERA CLASE.


// function obtener_nombre_completo(nombre, apellidos) {
//     return `${nombre} ${apellidos}` 
// }
// let nombre_completo = obtener_nombre_completo("Daniel", "Gimenez")

// console.log(nombre_completo)

// document.write('<p class=para> Bonjour le monde </p> ')
// let start = 'Bonjour '
// let prenom = ''
// let end = ''

// prenom = prompt ('quel est votre prenom?');
// result = start + prenom + end;
// alert(result);
// console.log(result);

// document.write("<div id='monid'>" + result + "</div>");

// let sumar = function (a, b, c) {
//         return a+b+c
// }
// let resultado = sumar(3, 4, 5)
// alert (resultado)

//  FUNCIONES COMO CONSTANTES

//  const saludar = function(nombre){
//     alert(`Hola ${nombre}`)
//     return "jajaja"
//  }
//  alert(saludar("Juan"))

// SCOPE
// Vriables Locales
// function Calculadora(a, b){
//     return a + b
// }
// alert( Calculadora(8, 9))

// function calculadora(num1, num2){
//     alert(num1 * num2);
// }

// let a, b;
// a = parseInt (prompt ("votre premier nombre:" ));
// b = parseInt (prompt ("votre deuxieme nombre:" ));

// calculadora(a, b)
// class Calcul{
//     constructor(a, b){
//         this.produit = a * b;
//         this.resta = a - b;
//     }
// }
// let a, b;
// a = parseInt (prompt ("votre premier nombre:" ));
// b = parseInt (prompt ("votre deuxieme nombre:" ));

// alert(new Calcul (a, b).produit);
// alert(new Calcul (a, b).resta);

// let sayHello3 = (function(){
//     return "Hello world";
// })();
// alert(sayHello3)

// Tablas 
// let myArray = ["sebas" , "Lau" , "Ludo" , "Pau" , "Guille"]; 
// alert(myArray[4])
// myArray.shift(); // Retirar 1 elemento
// myArray.pop(); // Retira Ultimo elementop de la lista

// let cousinsString = "Pauline Guilloume Clarisse";
// let cousinsArray = cousinsString.split(' ');
// // alert(cousinsArray)
// // alert(cousinsString)
// cousinsArray.pop(<> )
//  Retire Clarisse

// CONDICIONALES MULTIPLES
// /**
//  * QUE PERSONAJE ERES 
//  * SI ERES FUERTE ERES GOKU
//  * SI ERES VELOZ VEGETA
//  * SI ERES PEQUEÑO Y DEVIL KRILIN
//  * SI NO ERES NINGUNO ERES UNA SAVANDIJA
//  */
//  let personalidad = (prompt ("Cual es tu personalidad?:" ));

//  if (personalidad === "Soy fuerte") {
//     alert ( "Eres Goku")
// } else if ( personalidad === "Soy Veloz"){
//     alert ( "Eres Vegeta")
//  }else if (personalidad === "Soy debil") {
//     alert (" Eres Krilin")
//  } else {
//    alert ("Eres una savandija")
//  } 
// Ciclos de código o loops
//Palabra reservada FOR

// let i = parseInt (prompt ("escribe un número del uno al 100 y lo trasformare en cero:"))


// document.write(' Bonjour le monde ')




// // console.log(result);

