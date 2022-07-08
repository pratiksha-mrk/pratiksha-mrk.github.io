function f1(){
    var str= '<table>';
    for(i=1; i<=10;i++){
  str = str +'<tr><td>Apple'+ i + '</td></tr>'  
} 
 str = str + '</table>';
 document.getElementById('a1').innerHTML = str;
}

function f2(){
	var str = '<table>';
	for(i=1; i<=10; i++){
		str = str + '<tr><td>' + (i*1)+'</td><td>' + '</td><td>' + (i*2) + '</td><td>' + (i*3) + '</td></tr>';
		
	}
	str = str + '</table>';
    document.getElementById('a1').innerHTML = str;
	
	
}

function f3(){
	var text1 = document.getElementById('p1').value;
	var text2 = document.getElementById('p2').value;
	var str ='<table class="table table-hover"> <tbody>';
	for(i=parseInt(text1); i<=parseInt(text2); i++){
	str = str + '<tr><td>' + (i*1) + '</td><td>' +  (i*2) + '</td><td>' + (i*3) + '</td></tr>';	
	}
	str = str + '</table> </tbody>' ;
    document.getElementById('a1').innerHTML = str;
	
}