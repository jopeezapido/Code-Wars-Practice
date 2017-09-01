function filter_list(l) {
// Return a new array with the strings filtered out

//Previous Solution

    /*
    
    var getType = l.map(function(elem) {
        var typo = typeof(elem);
        if(typo == "number") {
            return elem;
        } else {
            return String;
        }
    });
    
    var getNum = getType.filter(function(elem) {
       return elem == "number"
    });

    */


//Refactored Solution
    var getNum = l.filter(function(elem) {return typeof elem == "number";});

    return getNum;
}


console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));