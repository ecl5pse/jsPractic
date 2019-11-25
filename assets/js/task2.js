'use strict';

function getRundomNumber(to) {
    return Math.floor(Math.random() * to);

}

/*
1. Функция принимает массив и выводит его на экран.

 */


function getRandomArray(length) {
    const arr = [];

    for (let i = 0; i < length; i++) {

        arr.push(getRundomNumber(666))

    }
    return arr;

}

const arr = getRandomArray(10);


function logArrayItems(arr) {

    if (Array.isArray(arr)) {
        arr.forEach(
            currentElem => {
                console.log(currentElem);
            }
        );
    }

}

/*

2. Функция принимает массив и выводит только четные
элементы.

 */

function getEvenItems(arr) {

    return arr.filter(function (currentValue) {

        return currentValue % 2 === 0;

    });
}


function sumArray(arr) {


    return arr.reduce(function (sum, current) {
        return sum + current

    })


}


function maxArrayElement(arr) {

    return Math.max(...arr);

}


function add(elem, index, arr) {


    arr.splice(index, 0, elem);

    return arr;


}


function arrDeleteElement(index, arr, deleteCounter) {


    arr.splice(index, deleteCounter);
    return arr;

}