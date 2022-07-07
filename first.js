function sum(){
 console.log('Hello Everyone welcome to mirketa');
}

function Adition(){
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
	var sum = parseInt(a) + parseInt(b);
	console.log(sum);
	document.getElementById('ar').value=sum;
	
}
	
function Substraction(){
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
	var sub = parseInt(a) - parseInt(b);
	console.log(sub);
	document.getElementById('ar').value=sub;
	
}	

function Division(){
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
	var div = parseInt(a) / parseInt(b);
	console.log(div);
	document.getElementById('ar').value=div;
	
}	

function Multiplication(){
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
	var mul = parseInt(a) * parseInt(b);
	console.log(mul);
	document.getElementById('ar').value=mul;
	
}	



