function CalculateAreaPerimeterCircle(){
    const r = document.getElementById('radius').value
	const area = r * r * 3.14;
	const perimeter =  2 * 3.14 * r;
	
	console.log('Area of Circle ' + area);
	console.log('Perimeter of Circle ' + perimeter);
}