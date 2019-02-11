function insertNum(num) {
	var string = document.getElementById('result').value;
	if(string.startsWith('0') && num != '.') 
		document.getElementById('result').value = string.replace('0','');
	document.getElementById('result').value = 
	document.getElementById('result').value + num;
} 

function calculate() {
	var result = document.getElementById('result').value;
	if(result)
		document.getElementById('result').value = Math.round(eval(result) * 10000000)/10000000;
	
}

function clean() {
	document.getElementById('result').value = "0";
}

function back() {
	var exp = document.getElementById('result').value;
	
	document.getElementById('result').value = exp.substring(0,exp.length-1);
	// xoa het thi tra ve '0'
	if(document.getElementById('result').value == "") 
		document.getElementById('result').value = "0";
}