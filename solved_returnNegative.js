

/*My Solution*/

function makeNegative(num) {
  // Code?
  if (num <= 0){
  	return num;
  }
  else if (num > 0){
  	return num * -1;
  }
}

makeNegative(1);//return -1
makeNegative(-5);//return -5
makeNegative(0);//return 0

/*Refactored Solution 1 */

function makeNegative(num) {
  return -Math.abs(num);
}

/*Refactored Solution 2*/

function makeNegative(num) {
  return num < 0 ? num : -num;
}

/*Refactored Solution 3*/

makeNegative = n => -Math.abs(n)


/*My refactored solutions*/

function makeNegative(num){
	return Math.abs(num) * -1;
}

makeNegative(1);//return -1
makeNegative(-5);//return -5
makeNegative(0);//return 0

