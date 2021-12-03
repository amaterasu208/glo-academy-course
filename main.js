'use strict';

let title = prompt('Как называется ваш проект?')
let screens =  prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные? ')
let screenPrice = +prompt('Сколько будет стоить работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let fullPrice = (screenPrice + servicePrice1 + servicePrice2)
console.log(fullPrice);
let percent = 10
let discount = 10
let servicePercentPrice = (fullPrice  / 100 * percent)
console.log(Math.ceil(servicePercentPrice));

if (fullPrice >= 30000) {
    console.log('У вас скидка 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log('У вас скидка 5%');
} else if (fullPrice < 15000 ) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    confirm('Что-то пошло не так');
} 
