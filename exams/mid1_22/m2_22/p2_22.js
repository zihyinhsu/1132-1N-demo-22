const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');

const suggest = document.querySelector('.give-suggestion');

function bmiCalc_22(height, weight) {
  const bmi = (weight / (height * height)).toFixed(1);
  return bmi;
}

function bmi_normal_low(height, weight) {
  const normalWeight = (18.5 * (height * height)).toFixed(1);
  return (normalWeight - Number(weight)).toFixed(1);
}

function bmi_normal_high(height, weight) {
  const normalWeight = (24 * (height * height)).toFixed(1);
  return (Number(weight) - normalWeight).toFixed(1);
}

function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;

  const bmi = bmiCalc_22(height, weight);
  const normal_low = bmi_normal_low(height, weight);
  const normal_high = bmi_normal_high(height, weight);

  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = 'Underweight';
    suggestion = `add at least ${normal_low}kg to normal`;
  } else if (bmi <= 24) {
    status = 'Normal';
    suggestion = ``;
  } else {
    status = 'Overweight';
    suggestion = `reduce at least ${normal_high}kg to normal`;
  }

  bmiResult.innerHTML = `Your BMI is ${bmi}, ${status}`;
  suggest.innerHTML = suggestion;
}

calculateBtn.addEventListener('click', calculateBMI);
