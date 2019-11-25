'use strict';

function getRundomNumber(to) {
    return Math.floor( Math.random() * to );

}


function getRandomArray(length) {
    const arr = [];

    for (let i = 0; i < length; i++){

        arr.push(getRundomNumber(666))

    }
    return arr;

}

const arr= getRandomArray(10);






function  printArray    (arr) {

    return console.log(arr);

}

/*

2. Функция принимает массив и выводит только четные
элементы.

 */

function printEvenArray(arr) {

arr.filter(function (currentValue) {

        return currentValue %2 === 0;

})
    return arr;

}


function sumArray(arr) {


    return arr.reduce(function (sum , current) {
        return sum + current

    })

    
};


function maxArrayElements(arr) {

    return Math.max(...arr);

    
};



function add ( index , arr , elemet) {


    arr.splice(index ,0 ,elemet);

    return console.log(arr);

    
}


function arrDeleteElement( index , arr , deleteCounter ) {


    arr.splice(index ,deleteCounter);
    return console.log(arr);

}