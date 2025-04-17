const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

let h1 = 1.75,
  w1 = 55;
let h2 = 1.75,
  w2 = 70;
let h3 = 1.75,
  w3 = 85;

function bmiCalc_22(height, weight) {
  const bmi = (weight / (height * height)).toFixed(1);
  return `BMI=${bmi},(h,w)=(${height} ,${weight})`;
}
result1.innerHTML = bmiCalc_22(h1, w1);
result2.innerHTML = bmiCalc_22(h2, w2);
result3.innerHTML = bmiCalc_22(h3, w3);
