// "use strict";

// let potato = 10

// for(let i = 1; i < 11; i++) {
//     if(i !== 5) console.log('Картошка №' + i + ' почищена');
    
// }

// while (potato > 0) {
//     console.log('Картошка №' + potato + ' почищена');
//     potato--
// }

// do {
//     console.log('Картошка №' + potato + ' почищена');
//     potato--
// }while (potato > 0)

// isNaN(screenPrice) || screenPrice.trim() === "" || screenPrice === null // - Проверка на число

'use strict';

let title
let screens 
let screenPrice 
let adaptive


let percent = 10
let fullPrice 
let allServicePrices
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор')

    screens =  prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные? ')

    do {
        screenPrice = prompt('Сколько будет стоить работа?')
    } while (!isNumber)

    while (!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить работа?')
    }

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices  = function () {
    let sum = 0

    for(let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')

        } else if ( i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        sum+= +prompt('Сколько это будет стоить?')
    }
    return sum
}


const showTypeof = function (variable) {
    console.log(variable, typeof variable);
}

function getFullPrice () {
    return screenPrice + allServicePrices
}
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percent / 100))
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}



const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "У вас скидка 10%"
    } else if (price >= 15000 && price < 30000) {
        return "У вас скидка 5%"
    } else if (price < 15000 ) {
        return "Скидка не предусмотрена"
    } else  {
        return "Что-то пошло не так"
    } 
}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeof(title)
showTypeof(screenPrice)
showTypeof(adaptive)

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getTitle);
console.log(servicePercentPrice);