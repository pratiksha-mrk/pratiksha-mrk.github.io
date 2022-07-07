function CalculateAreaPerimeterRectangle(){
  const l = document.getElementById('length').value;
  const b = document.getElementById('breath').value;
  
  const are = l*b;
  const perimeter = 2*(l+b);
  console.log('Area of Rectangle '+are); 
  document.getElementById('ar').value=are;
  console.log('Perimeter of Rectangle '+perimeter); 
  document.getElementById('pe').value= perimeter;
  
}