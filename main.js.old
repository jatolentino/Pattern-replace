let prefix = "\\textbf{";
let newtext = [];
let numbers = ['1','2','3','4','5','6','7','8','9','0'];
let sufnumb = ['1)','2)','3)','4)','5)','6)','7)','8)','9)','0)'];
let prefnumb = ['(1','(2','(3','(4','(5','(6','(7','(8','(9','(0'];

function myscript() {

	let myText = document.getElementById('mybox').value;
	newtext = myText;
	
	for (var j=0; j < numbers.length;j++){
		newtext = newtext.replaceAll(prefnumb[j],numbers[j]);
		newtext = newtext.replaceAll(sufnumb[j],numbers[j]);
	}
	//console.log(newtext);
	
	matches = myText.match(/\d+/g); // This stores the numbers within a text in an array ['32','6',.]
	
	for (var i=0; i < matches.length;i++){
		newtext = newtext.replace(matches[i], prefix.concat(matches[i],"}"));
		//myText = newtext;
	}
	
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
