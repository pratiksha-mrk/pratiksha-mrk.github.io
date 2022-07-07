function CalculateAreaPerimeterSquare(){
  const s = document.getElementById('side').value;
  
  const area = s * s;
  const perimeter = 4*s;
  console.log('Area of Square ' +area); 
  console.log('Perimeter of Square ' +perimeter);  
}