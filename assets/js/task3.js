'use strict';


function assembleAnArray(arr1 , arr2) {

    let arr3 = arr1.concat(arr2);

    return arr3.filter(
        function (item , index) {
        return arr3.indexOf(item ) >= index;
        
    });


}

function getCommonItems(arr1, arr2) {

    const result =  arr2.filter(

        (currentElem) => {
            return arr1.includes( currentElem );
        }

    );


    return [...(new Set(result))  ];

}



