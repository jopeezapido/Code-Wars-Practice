var sLength, error, typeOf, range, frac;

function printerError(s) {
//set a model
    range = s.match(/[n-z\d\s\W]/ig);
    sLength = s.length;//denominator
//decision
	if (range === null){
		console.log(0 + "/" + sLength);
	} else {
		error = range.length;//numerator
		frac = error + "/" + sLength;
		console.log(frac);
	}
}
printerError('aaabbbbhaijjjm');
printerError('aaaxbbbbyyhwawiwjjjwwm');
printerError('aaaxbbbbyyhwawrstuviwjjjwwm');
printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
























