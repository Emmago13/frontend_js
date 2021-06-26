//MODULO 16

//1-helloWorld

// console.log("Emmanuel");
// console.log("Alberto");
// console.log("Gomez");

//2-variables

// const myName = "Emmanuel"
// const myLastName = "Gomez"
// let myAge = 21
// let myNationality = "Argentina"
// const myPetName = "Tyson"
 
// console.log(`Mi nombre es ${myName} ${myLastName}.`);
// console.log(`Tengo ${myAge} años.`);
// console.log(`Soy de ${myNationality}.`);
// console.log(`Tengo un perro llamado ${myPetName}.`);

// console.log(`Me llamo ${myName} ${myLastName} y vivo en ${myNationality} con ${myPetName},mi perro.`);

// myAge = 26
// myNationality = "Australia"
// console.log(`Pienso vivir en ${myNationality} cuando tenga ${myAge}.`);

// let $ = 1
// let _ = 2
// console.log(`${$}`+`${_}`);
// console.log($+_);

//3-dataTypes

// number = 12345678901234567891234567890n
// console.log(number);
// console.log( typeof(number));
// let age = 21
// let nothing;
// console.log( typeof(age));
// console.log(nothing);
// console.log( typeof(nothing));

// let myName = "Emmanuel"
// let myAge = 21
// let myNationality = "Argentina"
// myAge = 21*2 //el doble de mi edad
// console.log(`Hola me llamo ${myName}, el doble de mi edad es ${myAge} y soy de ${myNationality}`);

// let isGreater = 21 > 90;
// console.log(isGreater);

// myName = null
// myAge = undefined
// console.log(`Hola me llamo ${myName} y tengo ${myAge}`);

//4-conversionTypes

// let bool = false
// console.log( typeof(myNationality));
// console.log( typeof(myAge));
// console.log( typeof(bool));
// let number = Number(bool)
// console.log( typeof(number));
// console.log(number);

// let str = "123456"
// console.log(str);
// console.log(typeof(str));
// let num = Number(str)
// console.log(num);
// console.log(typeof(num));
// console.log(Boolean("false"));
// console.log(Boolean(false));
// console.log(Number(false));
// console.log(String(1234567));

//5-mathOperations

// let sum = 13 + 17
// console.log(sum);
// let res = sum - 5
// console.log(res);
// let div = res/5
// console.log(div);
// let mult = div*5
// console.log(mult);
// let exp = div**2
// console.log(exp);
// sum++
// console.log(sum);
// mult--
// console.log(mult);
// let resto = 6 % 2
// console.log(resto);
// resto = 7 % 2
// console.log(resto);
// if (resto==0) {
//     console.log(`El numero es par`);
// }else if (resto>=1){
//     console.log(`El numero es impar`);
// }

//6-comparation

// console.log(`b`>`a`);
// console.log(`Emmanuel`>`Emanuel`);
// console.log(2**3>3**2);
// console.log(123/5<321/5);
// console.log(`Emmanuel`==["Emmanuel"]);
// console.log(`Emmanuel`===["Emmanuel"]);
// console.log("Emmanuel"!="Emanuel");
// console.log(2!=["2"]);
// console.log(2==`2`);
// Exercises
// console.log(5>4); //true
// console.log("apple">"pineapple"); //false
// console.log("2">"12"); //true ->es porque al string lo lee como frase(izquierda a derecha)=>2>1
// console.log(undefined == null); //true

//7-condicionales

// const myAge = 21
// if (myAge>18) {console.log(`Eres mayor de edad`)}
// else if (myAge<18) {console.log("Eres menor de edad")}
// else {console.log("Tienes 18 años!")}

// if (myAge>=21) {
//     console.log(`Felicidades! Tenes ${myAge} años!`);
// } else {
//     console.log("No cumplis los requisitos");
// }

// myAge >= 21 ? console.log(`Eres mayor de edad!`) : console.log(`Sos menor`);
// let myName = "Emmanuel"
// let secName = "Alberto"
// let lastName = "Gomez"
// if (myName == "Emanuel") {
//     console.log(`Tu nombre es ${myName}`);
// } else {console.log(`Tu nombre es ${myName}, y no cumple los requisitos`);}
// myName > secName ? console.log(`Tu primer nombre deberia ser ${secName}`) : console.log(`Tu primer nombre esta bien!`);
// lastName != "Gom" ? console.log("Felicidades!") : console.log("Mala suerte!");
//Exercises
// let password = "myOldPassword"
// if (password == "MyPassword1234") {
//     console.log("Logged In");
// } else {
//     console.log("Wrong Password");
// }
// password == "MyPassword1234" ? console.log("Logged In") : console.log("Wrong Password");

//8-logicOperators

// let hour = 11
// if (hour>10||hour<18) {
//     console.log(`La oficina esta abierta`)
// }else {console.log(`La oficina esta cerrada`)}

// hour = 9
// if (hour<10 || hour>18) {
//     console.log(`La oficina esta cerrada`)
// }else {console.log(`La oficina esta abierta`)}

// hour = 9
// hour<10 || hour>18 ? console.log("La oficina esta cerrada") : console.log("La oficina esta abierta")

// let prefixArg = "+54"
// let prefixCl = "+58"
// prefixArg == "+54" || prefixCl == "+56" ? console.log("Su llamada sera sin cargo") : console.log("Su llamada tendra costo adicional")

// console.log(!"hola");
// console.log(!0);
// console.log(!!null);
// console.log(!undefined);

//Exercises

// console.log(null || 2 || undefined); //2
// console.log(1 && null && 2); //null
// console.log(!`hola`); //false
// console.log(null || 2 && 3 || 4); //3

//9-bucles-while-for

// let index = 1
// while (index<3) {
//     console.log(index);
//     index++
// }
// let height = 155
// while (height<=170) {
//     console.log(`Your height is ${height}cm. Sorry! You're too short`);
//     height++
// }
// do {
//     console.log(`Your height is ${height}cm. Sorry! You're too short`);
//     height++
// } while (height<=166);

// let street = [
//     "obispo trejo",
//     "independencia",
//     "buenos aires",
//     "ituzaingo",
//     "chacabuco",
//     "obispo salguero"
// ]
// let leng = street.length
// let index = 0
// let i = 6
// while (index<leng && i>0) {
//     console.log(`Estas en ${street[index]} y te faltan ${i} cuadras para llegar a destino`);
//     index++
//     i--
// }
// do {
//     console.log(`Estas en ${street[index]} y te faltan ${i} cuadras para llegar a destino`);
//     index++
//     i--
// } while (index<leng && i>0);

// for (let index = 0; index < street.length && i>0; index++ && i--) {
//     const element = street[index];
//     console.log(`Estas en ${element} y te faltan ${i} cuadras para llegar a destino`);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let compras = [
//     400,
//     500,
//     600,
//     700,
//     800,
//     900,
//     1000
// ]
// let env = 100
// for (let index = 0; index < compras.length && env>0; index++ && env--) {
//     const element = compras[index];
//     if (element<800) {
//         console.log(`Su compra es de $${element} y su envio es de $${env}`);
//     }else {
//         console.log(`Su compra es de $${element} y su envio es gratuito`);
//     }
// }      //DUDA ACA!!

//Exercises

// for (let num = 2; num <= 10; num++) {
//     if (num % 2 == 0) {
//         console.log(`El numero ${num} es par`);
//     }
// }
// for (let i = 0; i < 3; i++){
//     console.log(`numero ${i}!`);
// }

//10-switch

// let zodSign = "Capricornio"
// switch (zodSign) {
//     case "Capricornio":
//         console.log("Tienes un buen signo zodiaco!");
//         break;
//     case "Libra":
//         console.log("Tienes un buen signo zodiaco!");
//         break;
//     case "Sagitario":
//         console.log("Tienes un buen signo zodiaco!");
//         break;
//     default:
//         console.log(`Lo lamento! ${zodSign} es un signo muy malo!`);
//         break;
// } 
// let milanesa = "soja"
// switch (milanesa) {
//     case "pollo":
//         console.log("Tienes un buen gusto!");
//         break;
//     case "carne":
//         console.log("Tienes un buen gusto!");
//         break;
//     default:
//         console.log("Tienes un pesimo gusto!");
//         break;
// }
// let favGame = "Call of Duty"
// switch (favGame) {
//     case "Modern Combat":
//         console.log(`Elegiste ${favGame}. Tienes un buen gusto!`);
//         break;
//     case "Call of Duty":
//         console.log(`Elegiste ${favGame}. Tienes un buen gusto!`);
//         break;
//     case "Fifa":
//         console.log(`Elegiste ${favGame}. Tienes un buen gusto!`);
//         break;
//     default:
//         console.log(`Elegiste ${favGame}. Tienes un pesimo gusto!`);
//         break;
// }

//Exercises

// let navegador = `Opera`
// if (navegador == `Edge`) {
//     console.log(`¡Tienes Edge!`);
// }else if (navegador == `Chrome`) {
//     console.log('Esta bien, soportamos estos navegadores también');
// }else if (navegador ==`Safari`) {
//     console.log('Esta bien, soportamos estos navegadores también');
// }else if (navegador ==`Firefox`) {
//     console.log('Esta bien, soportamos estos navegadores también');
// }else if (navegador ==`Opera`) {
//     console.log('Esta bien, soportamos estos navegadores también');
// }else{
//     console.log('¡Esperamos que esta página se vea bien!');
// }

// let a = 1
// switch (a) {
//     case 0:
//         console.log( 0 );
//         break;
//     case 1:
//         console.log( 1 );
//         break;
//     case 2:
//     case 3:
//         console.log( `2,3` );
//         break;
// }

//MODULO 17

//1-functions

let food = "pizza"
function favFood() {
    food = "milanesa"
    console.log(`Mi comida favorita es la ${food}`);
}
console.log(food);
favFood()
console.log(food);
