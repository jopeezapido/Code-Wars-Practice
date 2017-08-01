var sLength, error, typeOf, range, frac;

function printerError(s) {
//set a model
    range = s.match(/[n-z\d\s\W]/ig);
    sLength = s.length;//denominator

//create a fraction
		

//Decision
	if (range === null){
		range = 0;
		console.log(range + "/" + sLength);
	} else if (range != null && error > 0 ){
		error = range.length;//numerator
		frac = error + "/" + sLength;
		console.log(frac);
	}
	//console.log(range);
}

printerError('aaabbbbhaijjjm');
printerError('aaaxbbbbyyhwawiwjjjwwm');























