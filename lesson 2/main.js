let myVar;

myVar = 10;
console.log(typeof myVar);
myVar = 15115848484846321312312312312312312312413435454;
console.log(typeof myVar);
myVar = "hello world!";
console.log(typeof myVar);
myvar = true;
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);
myVar = undefined;
console.log(typeof myVar);
myVar = Symbol();
console.log(typeof myVar);

myVar = {}

let a = 4; 
let b = a || 2
console.log(b);

console.log(50);
console.log(0.5);
console.log(.5);

console.log(Infinity);
console.log(NaN);
console.log(2 / 0);
console.log('string' / 2);
console.log(typeof 50n);

// Операторы

console.log(+5);
console.log(-5);

let i = 5

console.log(i++);
console.log(i);


let n = 2;
console.log(n);
n += 5;
console.log(n);
n *= 2
console.log(n);

console.log(Math.floor(3.456)); // округление в меньшую сторону
console.log(Math.ceil(3.456)); // округление в большую сторону
console.log(Math.round(3.456)); // округление до ближайшего числа 
console.log(Math.trunc(3.456)); // удаление дробной части

console.log(Math.random()); // Случайное число от 0 до 1
console.log(Math.max(3, 5, 8)); // большее число
console.log(Math.sqrt(25)); // корень числа
console.log(Math.pow(5, 2)); // Вовзовдит в степень

let myString = "Hello world!"
let myStr = 'Hello world!'

let mySomeStr = 'hello "my" friends'
console.log(mySomeStr);

let conc = 10 + "world"
console.log(conc);

let str = "Hello my friends"

// методы

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(2)); //устаревшее
console.log(str[2]);

console.log(str.substring(6));
console.log(str.substring(6, 15));
console.log(str.slice(6, 15));
console.log(str.slice(-8));
console.log(str.substr(6, 2));

console.log(str.indexOf("my"));
console.log(str.includes("my"));

console.log(str.replace("my", "your"));

console.log(str.split("e"));





