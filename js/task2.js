'use strict';








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

}


function sumArray(arr) {


    return arr.reduce(function (sum , current) {
        return sum + current

    })

    
};


function maxArrayElements(arr) {

    return Math.max(...arr);

    
};



function add () {
    
}