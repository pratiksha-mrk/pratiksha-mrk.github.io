function cal(){
	var x1 =document.getElementById('p1').value;
	var x2 =document.getElementById('p2').value;
	var x3 =document.getElementById('p3').value;
	var result=(x1*x2*x3)/100;
	console.log(result)
	document.getElementById('p4').value=result;
	
}