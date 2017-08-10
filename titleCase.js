var splitTitle;
var splitMinor;
var newArray;
var check;
var searchy;
var rep;
var findWord;

function titleCase(title, minorWords) {
	splitTitle = title.split(/\s/ig);
	splitMinor = minorWords.split(/\s/ig);

	var findTitleWord = splitTitle.filter(function(element){
		return element.match(//ig)
	});

	console.log(findTitleWord);
}
	
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
//titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'