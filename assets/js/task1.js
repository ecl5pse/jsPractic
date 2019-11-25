'use strict';

function factorial (n) {

    if( n=== 0){
        return 1 ;
    }else {
       return  n*factorial(n-1);
    }

};



function printNumber(num)  {


    console.log((''+num).split('').reverse().join(''));



};


function sum(num) {


return num.toString().split(" ").reduce(function(a ,b){
    return +a + +b;

})

}

