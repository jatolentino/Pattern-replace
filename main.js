let prefix = " \\textbf{";
let newtext = [];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
let sufnumb = ['1)','2)','3)','4)','5)','6)','7)','8)','9)','0)'];
let prefnumb = ['(1','(2','(3','(4','(5','(6','(7','(8','(9','(0'];

// Proctecting some key-text
let firstProtect = "reservoir 1";
let secondProtect = "reservoir 2";


function myscript() {

	let myText = document.getElementById('mybox').value;
	newtext = myText;
	
	// Extracting the paranthesis
	for (var j=0; j < numbers.length;j++){
		newtext = newtext.replaceAll(prefnumb[j],numbers[j]);
		newtext = newtext.replaceAll(sufnumb[j],numbers[j]);
	}

	// Protectiong the words
	newtext = newtext.replaceAll(firstProtect, "reservoir1");
	newtext = newtext.replaceAll(secondProtect, "reservoir2");
	newtext = newtext.replaceAll("figure", "FIG");
	newtext = newtext.replaceAll("Figure", "FIG");
	
	/*for (var j=0; j < thirdProtect.length;j++){
		newtext = newtext.replaceAll(thirdProtect[j],fifthProtect[j]);
		newtext = newtext.replaceAll(fourthProtect[j],fifthProtect[j]);
	}*/
	
	
	matches = myText.match(/\d+/g); // This stores the numbers within a text in an array ['32','6',.]
	console.log(matches);
	let matchesnonrepeat = [...new Set(matches)];
	console.log(matchesnonrepeat);
	let firstmatch = [];
	let secondmatch = [];
	let thirdmatch = [];
	let fourtmatch = [];
	
	for(var i=0;i<matchesnonrepeat.length;i++){
    firstmatch[i] = " " + matchesnonrepeat[i] + " ";
		secondmatch[i] = " " + matchesnonrepeat[i] + ", ";
		thirdmatch[i] = " " + matchesnonrepeat[i] + ". ";
		fourtmatch[i] = " " + matchesnonrepeat[i] + ".";
	}
	totalmatch = firstmatch + secondmatch + thirdmatch;
	console.log(totalmatch);
	
	
	for (var i=0; i < firstmatch.length;i++){
		newtext = newtext.replaceAll(firstmatch[i], prefix.concat(matchesnonrepeat[i],"} "));
		myText = newtext;
		newtext = newtext.replaceAll(secondmatch[i], prefix.concat(matchesnonrepeat[i],"}, "));
		myText = newtext;
		newtext = newtext.replaceAll(thirdmatch[i], prefix.concat(matchesnonrepeat[i],"}. "));
		myText = newtext;
		newtext = newtext.replaceAll(fourtmatch[i], prefix.concat(matchesnonrepeat[i],"}."));
		myText = newtext;
	}
	
	// Returning the protected words
	newtext = newtext.replaceAll("reservoir1",firstProtect);
	newtext = newtext.replaceAll("reservoir2",secondProtect);
	/*for (var j=0; j < fifthProtect.length;j++){
		newtext = newtext.replaceAll(fifthProtect[j],sixthProtect[j]);
	}*/
	
	// Copyng to the second box
	document.getElementById('myboxresult').value = newtext;
}

function clipcopy() {
	copyText = document.getElementById('myboxresult');
	copyText.select();
	document.execCommand('copy');
}

function reset() {
	document.getElementById("mybox").value = "";
	document.getElementById("myboxresult").value = "";
}

