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
// }     

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

// let food = "pizza"
// function favFood() {
//     food = "milanesa"
//     console.log(`Mi comida favorita es la ${food}`);
// }
// console.log(food);
// favFood()
// console.log(food);
// function favBusiness(streets, numbers, name) {
//     console.log(`En ${streets} al ${numbers} se encuentra el negocio ${name}`);
// }
// favBusiness(`independencia`,492, 'Carnave')
// favBusiness('Bv. Illia', 375, 'Rapipago')

// function getMovie() {
//     const max = 5
//     const min = 1
//     const getNumber = Math.round(Math.random() * (max - min)) + min;
//     switch (getNumber) {
//         case 1:
//             console.log("Gone Girl");
//             break;
//         case 2:
//             console.log("Fight Club");
//             break;
//         case 3:
//             console.log("Scarface");
//             break;
//         case 4:
//             console.log("Casino");
//             break;    
//         default:
//             console.log("Goodfellas");
//             break;
//     }
// }
// getMovie ()
// function getRandom(minim, maxim) {
//     const getRandomNum = Math.round(Math.random()*(maxim - minim)) + minim;
//     console.log(getRandomNum); 
// }
// getRandom(1,100)
// let sum =(a,b) => a + b
// console.log(sum(1,2));

//Exercises

// let checkAge = (age) => {
//     age>18 ? console.log(true) : console.log("No eres mayor de edad todavia");
// }
// checkAge(21)
// function calcMin(a,b) {
//     if (a<b) {
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }
// calcMin(3,4)
// function calcDouble(a,b) {
//     return a*b
// }
// console.log(calcDouble(3,2));
// let calcMin = (a,b) => {
//     a<b ? console.log(a) : console.log(b);
// }
// calcMin(12,4)
// let calcDouble = (a,b) => a*b
// console.log(calcDouble(3,2));

//2-classes

// class User {
//     constructor(name,lastname,course,date,homework){
//         this.name = name;
//         this.lastName = lastname;
//         this.course = course;
//         this.date = date;
//         this.homework = homework;
//     }

//     sayHi() {
//         console.log(`Hola ${this.name} ${this.lastName}! Estas inscripto en ${this.course}`);
//     }
//     sayHomework() {
//         console.log(`Hoy ${this.date}, tienes ${this.homework} tareas para hacer`);
//     }
// }
// let user = new User("Emmanuel","Gomez","Fullstack Dev")
// user.sayHi()
// let user1 = new User("Marisol","Gomez","Microeconomia 1","30 de junio",5)
// user1.sayHi()
// user1.sayHomework()

// class Paper {
//     constructor(name, date, course){
//         this.name = name;
//         this.date = date;
//         this.course = course;
//     }
//     sayName() {
//         console.log(`El paper ${this.name} debe ser leido para el dia ${this.date}`);
//     }
//     sayCourse() {
//         console.log(`El paper ${this.name} pertenece al curso ${this.course}`);
//     }
// }
// let paper = new Paper("Inflation Targeting","2 de Agosto","Macroeconomia 2")
// paper.sayName()
// paper.sayCourse()

//3-objects

// let user = {
//     name: "Emmanuel",
//     age: 21,
//     course: "Fullstack Dev"
// }
// console.log(user.name);
// console.log(user.course);

// user.city = "Cordoba"
// console.log(user);
// console.log(user.city);
// delete user.age
// console.log(user);
// user['age'] = 22
// console.log(user.age);
// console.log(user);
// delete user.age
// console.log(user);

// for (const checkUser in user) {
//     console.log(checkUser);
//     console.log(user[checkUser]);
// }

//Exercises

// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// function sum(object) {
//     let sum = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             sum += object[key];
//         }
//     }
//     return sum;
// }
// let summed = sum(salaries);
// console.log(summed);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "Mi menú"
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu)

//4-arrays

// let fruits = [
//     "banana",
//     "manzana",
//     "pomelo",
//     "kiwi"
// ]
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// fruits.push("mango")
// console.log(fruits);
// fruits[2]= "sandia"
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.unshift("naranja")
// console.log(fruits);
// fruits.push("manzana","pera","naranja")
// console.log(fruits);

// let users = [
//     {name: "Emmanuel"},
//     {name: "Juan"},
//     {name: "Emiliano"}
// ]
// console.log(users);
// console.log(users[0 ]);

// let musicGenre = ["Jazz","Blues"]
// console.log(musicGenre);
// musicGenre.push("Rock-n-Roll")
// console.log(musicGenre);
// musicGenre[1] = "Classics"
// console.log(musicGenre);
// musicGenre.shift()
// console.log(musicGenre);
// musicGenre.unshift("Rap","Reggae")
// console.log(musicGenre);

// const num = [12, 45, 32 ,56 ,190]
// let summed = 0
// for (const x of num) {
//     summed += x
// }
// console.log(summed);

//5-arrayMethods

// let arr = ["yo","estudio","JavaScript"]
// arr.splice(1,1,"aprendo")
// console.log(arr);
// arr.splice(2,1,"Programacion")
// console.log(arr);
// let fruits = []
// fruits.splice(0,1,"mango")
// console.log(fruits);
// fruits.push("manzana","naranja")
// console.log(fruits);
// fruits.splice(0,0,"banana")
// console.log(fruits);
// let newArr = arr.splice(0, 3, "con","muchas","ganas")
// console.log(arr);
// console.log(newArr);
// arr.splice(3, 3, "con","muchas","ganas")
// console.log(arr);

// console.log(arr.slice(0,3));

// let getNumber = [0,10,20,30,40,50,60]
// console.log(getNumber.slice(0,6)) 

// let newNumber = [1,2,3]
// arr = newNumber.concat([4,5,6])
// console.log(arr);
// console.log(newNumber);
// console.log(newNumber.concat([4,5,6]));

// let arr = ["yo","estudio","JavaScript"]
// console.log(arr.concat(["con","muchas","ganas"]));

// let sum = 0
// const numbers = [1,2,3,4,5,6]
// numbers.forEach(funcNum)
// function funcNum(item) {
//     sum += item
// }
// console.log(sum); 

// function multNum(item,index,arr) {
//     arr[index] = item * 2
//     console.log(arr[index]);
// }
// numbers.forEach(multNum)

// numbers.forEach(function Hi(item,index,array) {
//     if (array[index] >= 3) {
//         console.log('This cannot happen');
//     }else{console.log('Thats ok!');}
// })

// const letColor = ["red","purple","orange","gray","green","black"]

// letColor.forEach(function markColor(item) {
//     item === "gray" ? console.log(`${item} <-This one!`) : console.log(`${item}`);
// })

// const num = [1,2,3,4,5,6,1,2,3]
// console.log(num.indexOf(3));
// console.log(num.indexOf(1));
// console.log(num.lastIndexOf(1));
// console.log(num.includes(2));
// const fruits = ["apple","orange","banana","orange","mango"]
// console.log(fruits.indexOf("orange"));
// console.log(fruits.lastIndexOf("orange"));

// const shopList = ["bread","milk","eggs","cake","steak"]
// function shop(item) {
//     if (shopList.includes(item) === true) {
//         console.log(`Do not add it!`);
//     }else{console.log(`Add it!`);}
// }
// shop("cookies")
// shopList.push("cookies")
// shop("cookies")
// console.log(shopList);
// shop("cereal")
// shopList.push("cereal")
// shop("cereal")
// console.log(shopList.indexOf("eggs"));
// console.log(shopList.indexOf("cake"));

// let movies = [{movie: "Figth Club", rate: 80},
//     {movie: "Inception", rate: 95},
//     {movie: "Interestellar", rate: 90},
//     {movie: "Contratiempo", rate: 70},
//     {movie: "Ghost", rate: 60},
//     {movie: "Wonder", rate: 75},
//     {movie: "Beautiful boy", rate: 75},
//     {movie: "21 Blackjack", rate: 80}
// ]
// let movie = movies.find(item => item.rate >= 90)
// console.log(movie);
// let movieIndex =movies.findIndex(item => item.rate <= 70)
// console.log(movieIndex);
// let getMovies = movies.filter(item => item.rate >= 90)
// console.log(getMovies);
// let someMovies = movies.filter(item => {
//     const name = item.movie.split('')
//     return name[0] === "I"
// })
// console.log(someMovies);


// let users = [
//   {id: 1, name: "Juan", age: 27},
//   {id: 2, name: "David", age: 21},
//   {id: 3, name: "Franco", age: 31},
//   {id: 4, name: "Emmanuel", age: 22},
//   {id: 5, name: "Elias", age: 23},
//   {id: 6, name: "Francisco", age: 29},
//   {id: 7, name: "Erik", age: 34}
// ];

// let someUsers = users.filter(item => {
//   const string = item.name.split('');
//   return string[0] === "E" 
// });
// console.log(someUsers);
// let checkAge = users.filter(item => item.age >= 25)
// console.log(checkAge);
// let checkId = users.find(item => item.id === 1)
// console.log(checkId);

// let users = [
//     {name: "Emmanuel", lastname: "Gomez"},
//     {name: "Marcio", lastname: "Prado"},
//     {name: "Alejo", lastname: "Arguello"},
//     {name: "Tomas", lastname: "Farias"},
//     {name: "Braian", lastname: "Romero"},
//     {name: "Uriel", lastname: "Lopez"},
//     {name: "Franco", lastname: "Lopez"}
// ]
// let user = users.map(item => [item.name,item.lastname].join(" "))
// console.log(user);
// console.log(user.reverse());
// console.log(users.sort()); //Doesn't work
// console.log(user.sort());

// let numbers = [1,2,3,4,6,7,8,9,10]
// let changeNum = numbers.map(item => item * 10)
// console.log(changeNum);
// console.log(numbers.reverse());
// console.log(numbers.sort());

// const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ]
// console.log(days.reverse());
// console.log(days.sort());

//Exercises

// let users = [
//   {id: 1, name: "Fran", age: 31},
//   {id: 2, name: "Katy", age: 18},
//   {id: 3, name: "Federico", age: 38},
//   {id: 4, name: "Maria", age: 24},
//   {id: 5, name: "John", age: 45},
//   {id: 6, name: "Fran", age: 7},
// ];
// console.log(users);
// users.splice(0,1)
// users.splice(1,2)
// console.log(users);
// users.push({id: 7, name: "Emmanuel", age: 22},{id: 8, name: "Rafael", age: 31},{id: 9, name: "Roger", age: 37})
// console.log(users);
// users.map(item => {console.log(`Hola me llamo ${item.name} y tengo ${item.age} años`);})
// let user = users.find(item => item.age == 31)
// console.log(user);
// let user = users.filter(item => item.name === "Fran")
// console.log(user);
// let checkAge = users.map(item => item.age = 17)
// console.log(checkAge);
// console.log(users);

