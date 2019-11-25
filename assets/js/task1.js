'use strict';

function factorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);

}


function printNumber(num) {


    console.log( num.toString().split('').reverse().join(''));


}


function getMirrorNumber( number ) {

    if(number < 10){
        return number;
    }

    const lastDigit = number % 10;

    return Number(`${lastDigit}${ getMirrorNumber((number - lastDigit) / 10 ) }`);



}



function getSumOfNumberDigit( number ) {

    if(number < 10){
        return number;
    }

    const lastDigit = number % 10;

    return lastDigit + getSumOfNumberDigit((number - lastDigit) / 10 );



}


function sum(num) {


    return num.toString().split(" ").reduce(function (a, b) {
        return +a + +b;

    })

}

function getBrackets(number) {

    if( number === 1 ){
        return "()";
    }
    return `(${getBrackets(number - 1)})`



}

