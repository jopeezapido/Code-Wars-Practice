function sumDigPow(a, b) {
	newA = Math.floor(Math.min(a,b));
	newB = Math.floor(Math.max(a,b));
	var newArray = [];//an array to push values to. Values will depend on the returned values of the decision tree below
	var bArray = [];

	if (newA <= newB){
		if (newA < 10 && newB >= 10){

			//solving a

				//a loop that will write out numbers from 'a' to 9
				for (i = a; i <= 9; i++){
					//push these values in to new Array above
					var pushy = newArray.push(i);
				}
				
				//console.log(newArray)

			//solving b

				//get all values from 10 to 'newB'

				for (i = 10; i <= newB; i++){
					var element = i;
					var pushyB = bArray.push(element)
					//console.log(b.length)
				}

				//console.log(bArray);

				//a solution to convert a number to a string, split the stringed numbers into separate strings and convert each of them to numbers again, returing an array of numbers

				var convString = bArray.map(function (elem){
					var stringy = elem.toString();
					var splitString = stringy.split('');
					return splitString;
				});

				var splitElements = convString.map(function (elem){
					for (i = 0; i <= elem.length; i++){
						elem += elem[i];
						return elem;
					}
				});

				console.log(splitElements)

			
			//console.log("'a' is less than 10, and 'b' is not");
		}
		else if (newA < 10 && newB < 10){
			//a loop that will write out numbers from 'a' to 'b'
			//console.log("BOTH 'a' and 'b' is less than 10");
		}

		else if(newA >= 10 && newB >= 10){
			//console.log("BOTH 'a' and 'b' is a 2 or more-digit integer");
		}
		else {
			//console.log('time to think and write a new branch')
		}
	}
}

//sumDigPow(1, 10); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
//sumDigPow(10, 100); //[89]
//sumDigPow(90, 100); //[]
//sumDigPow(90, 150); //[135]
//sumDigPow(50, 150); //[89, 135]
//sumDigPow(10, 150); //[89, 135

/*
What you need:

Test
	- A decision that tests:

		> If 'a' is greater than 'b'

		> If 'a' is less than or equal to 'b'

			> If 'a' is less than 10, and 'b' is not

			> If BOTH 'a' and 'b' is less than 10

			> If 'a' is a 2 or more-digit integer, and 'b' is not

			> If BOTH 'a' and 'b' is a 2 or more-digit integer

Loops (if one of the boolean values in the tests are true)
	- To write each 1-digit integer until 9
	- To write every 2-digit integer that meets the property until parameter 'b'

*/