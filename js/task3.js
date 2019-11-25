'use strict';


function assembleAnArray(arr1 , arr2) {

    let arr3 = arr1.concat(arr2);

    let arrUnique = arr3.filter(function (item , index) {
        return arr3.indexOf(item )>= index;
        
    })

    console.log(arrUnique);
}




