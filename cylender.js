function CalculateAreaVolumeCylinder(){
  const r = document.getElementById('radius').value;
  const h = document.getElementById('height').value;
  
  const b = parseInt (r)*(parseInt(r)+parseInt(h));
  const are = 2*3.14* parseInt(b);
  const volume = 3.14*parseInt(r*r*h);
  console.log('Area of Cylender '+are); 
  document.getElementById('ar').value=are;
  console.log('Volume of Cylinder '+volume); 
  document.getElementById('pe').value= volume;
  
}