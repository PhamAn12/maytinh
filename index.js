function insertNum(num) {

	document.getElementById('result').value = 
	document.getElementById('result').value + num;
} 

function calculate() {
	var result = document.getElementById('result').value;
	if(result)
	document.getElementById('result').value = eval(result);
}

function clean() {
	document.getElementById('result').value = "";
}

function back() {
	var exp = document.getElementById('result').value;
	document.getElementById('result').value = exp.substring(0,exp.length-1);
}