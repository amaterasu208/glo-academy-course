'use strict';

let title = prompt('Как называется ваш проект?')
let screens =  prompt('Какие типы экранов нужно разработать?', 'Простые, сложные, интерактивные? ')
let screenPrice = +prompt('Сколько будет стоить работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')


let percent = 10
let fullPrice 
let allServicePrices
let servicePercentPrice



const showTypeof = function (variable) {
    console.log(variable, typeof variable);
}

const getAllServicePrices  = function () {
    return servicePrice1 + servicePrice2
}

function getFullPrice () {
    return screenPrice + allServicePrices
}
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (percent / 100))
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase
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


allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeof(title)
showTypeof(screenPrice)
showTypeof(adaptive)

console.log(getRollbackMessage(fullPrice));
console.log(fullPrice);
console.log(Math.ceil(servicePercentPrice));
console.log(getTitle);
console.log(servicePercentPrice);
