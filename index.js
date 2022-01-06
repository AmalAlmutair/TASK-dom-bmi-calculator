function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let BMI=(weight/((height/100)*(height/100)));
let BMIStatus
if (BMI<18.5) {BMIStatus="Underweight"}
  else if(BMI>=18.5 && BMI<=24.9) {BMIStatus="Healthy Weight"} 
    else if(BMI>=25&& BMI<=29.9) {BMIStatus="Overweight"}
alert(BMI+" "+BMIStatus)}


