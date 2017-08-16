function accum(s){

	//Get letters only, regardless of what is called

		var replacy = s.replace(/[^a-z]/ig,'');
		//console.log(replacy);

	//Separate each letter and return an array

		var splitty = replacy.split('');
		//console.log(splitty);

	//Get small letters only to lower case regardless of what is called

		var low = splitty.map(function (elem){
			return elem.toLowerCase();
		})
		//console.log(low);

		var newArray = [];//new array to put modified elements int

		var pos = low.map(function (elem){

	//access each letter of the array and find each of their positions

			var ind = low.indexOf(elem);
			//console.log(ind);

	//loop through each element using the index as the boundary of the loop. Concatenate string

			for (i=0; i < ind ; i++){
				elem += elem[i];

			}

	//push each modified element into the new array set above to create an array of values
			
			var pushy = newArray.push(elem);
			console.log(newArray);

	//access each letter of the first word

		});

	//unite the elements of the array into one string, separated by a dash (-)
	
		var joiny = newArray.join('-');

		/*function capitalizeFirstLetter(){
			var cappy = joiny[0].toUpperCase() + joiny.slice(1);
			console.log(cappy)

			var x = function (elem){
				elem += 
			}
			
		}

		capitalizeFirstLetter(joiny)*/


	//Something which will transform each first letter to upper case

}

//accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"