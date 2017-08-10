var check;

function even_or_odd(number) {
	check = number % 2;

	if (number >= 0 && check == 0){
		return "Even";
	}
	else if (number > 0 && check >= 1){
		return "Odd";
	}
	else if (number <= 0 && check == 0){
		return "Even"
	}
	else if (number < 0 && check <= -1){
		return "Odd";
	}
}

even_or_odd(2);
even_or_odd(0);
even_or_odd(7);
even_or_odd(1);