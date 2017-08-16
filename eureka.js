function sumDigPow(a, b) {

}

sumDigPow(1, 10); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100); 	//[1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100); //[89]
sumDigPow(90, 100); //[]
sumDigPow(90, 150); //[135]
sumDigPow(50, 150); //[89, 135]
sumDigPow(10, 150); //[89, 135]

/*
What is required?
- an array (empty or not)
- If parameters includes a 1-digit integer in its range

	> function should write down the range starting from the 1-digit integer until 9

	> Succeeding numbers after 9 should be
		* the numbers that meets the 'property' and
		* should be within the range of arguments 'a' and 'b'.

- Otherwise if parameters' range does not include a 
1-digit integer, array should not contain a sequence of 1-digit integers (1-9)
	* Array will only include those integers that meets the 'property' and
	* should be within the range of the parameters set

What you need to know:
- 'Property' defined in this problem is:
	> a 2-digit or more integer that when..
	> each of the digits will be raised to 1,2,3 and so on and so forth respectively,
	> the sum of the products is the same integer
