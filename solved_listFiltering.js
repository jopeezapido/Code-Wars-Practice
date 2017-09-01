function filter_list(l) {
    // Return a new array with the strings filtered out
    
    //console.log(arr);

    var getType = l.map(function(elem) {
        var typo = typeof(elem);
        if(typo == "number") {
            return elem;
        } else {
            return String;
        }
    });
    //console.log(getType);

    var getNum = getType.filter(function(elem) {
        return elem != String;
    });

    return getNum;
}

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]