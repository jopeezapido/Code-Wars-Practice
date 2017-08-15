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

	//access each letter of the array and find each of their positions

		var newArray = [];

		var pos = low.map(function (elem){

			var ind = low.indexOf(elem);
			//console.log(ind);

			for (i=0; i < ind ; i++){
				elem += elem[i];
			}
			
			var pushy = newArray.push(elem);
			//console.log(newArray);


		});
	
		var joiny = newArray.join('-');

		function capitalizeFirstLetter(){
			var cappy = joiny[0].toUpperCase() + joiny.slice(1);
			console.log(cappy)

			var x = function (elem){
				elem += 
			}
			
		}

		capitalizeFirstLetter(joiny)


	//Something which will transform each first letter to upper case

}

//accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"