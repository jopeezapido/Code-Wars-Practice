function accum(s){

	//Get letters only, regardless of what is inputted
	var replacy = s.replace(/[^a-z]/ig,'');
	//console.log(replacy);

	//Separate each letter and return an array
	var splitty = replacy.split('');
	//console.log(splitty);

	//Change all the letters to lower case
	var low = splitty.map(function (elem){
		return elem.toLowerCase();
	})
	//console.log(low);

	//access each letter of the array and find each of their positions

	/*for (i= 0; i <= low.length; i++){
		var pos = low.indexOf(low[i]);
		console.log(pos + ' is the position of ' + low[i] + ' in the array.');
	}*/

	var newArray = [];

	var pos = low.map(function (elem){
		var x = low.indexOf(elem) /*+ ' is the position of ' + elem + ' in the array.'*/
		//console.log(x);
		for (i=0; i < x ; i++){
			elem += elem[i];	
		}
		var pushy = newArray.push(elem);
		//console.log(newArray)
	});

	//Something which will duplicate the letter of the string in each section to the number of the position where letter is at

	/*var dup = low.map(function (elem){
		var newArray = [];//Somthing which will be the container of the separated elements
		var pushy = newArray.push(elem);
		};

	for (i = 0; i < pos + 1; i++ ){
		return low[i]+=low[i];
		console.log(pos);
	}*/
}

accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"