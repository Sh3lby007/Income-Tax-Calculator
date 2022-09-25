// Add event listener when the button is clicked

document.getElementById("click").addEventListener("click", taxCalculator);

// Assigning the tax a variable named message and so that the tax can have multiple numbers because different tax calculate different results.
const message = document.getElementById("tax");

function taxCalculator() {
  // Assigning the income as a constant because the value doesnt change once user input the value. The ".value" property asks the JS to take the value a user types in.
  const income = document.getElementById("income").value;

  // If/else conditional statements to check for the annual income
  if (income <= 20000) {
    message.textContent = "$0";
  } else if (income <= 30000) {
    const sum = (income - 20000) * 0.02;
    message.textContent = "$" + sum;
  } else if (income <= 40000) {
    const sum = 200 + (income - 30000) * 0.03;
    message.textContent = "$" + sum;
  } else if (income <= 80000) {
    const sum = 550 + (income - 40000) * 0.07;
    message.textContent = "$" + sum;
  } else if (income <= 120000) {
    const sum = 3350 + (income - 80000) * 0.115;
    message.textContent = "$" + sum;
  } else if (income <= 160000) {
    const sum = 7950 + (income - 120000) * 0.15;
    message.textContent = "$" + sum;
  } else if (income <= 200000) {
    const sum = 13950 + (income - 160000) * 0.18;
    message.textContent = "$" + sum;
  } else if (income <= 240000) {
    const sum = 21150 + (income - 200000) * 0.19;
    message.textContent = "$" + sum;
  } else if (income <= 280000) {
    const sum = 28750 + (income - 240000) * 0.195;
    message.textContent = "$" + sum;
  } else if (income <= 320000) {
    const sum = 36550 + (income - 280000) * 0.2;
    message.textContent = "$" + sum;
  } else if (income <= 500000) {
    const sum = 44550 + (income - 320000) * 0.22;
    message.textContent = "$" + sum;
  } else if (income < 1000000) {
    const sum = 84150 + (income - 500000) * 0.23;
    message.textContent = "$" + sum;
  } else if (income >= 1000000) {
    const sum = 199150 + (income - 1000000) * 0.24;
    message.textContent = "$" + sum;
  }
}
