const InitApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", InitApp);

// let numbers = [1, 2, 3, 4, 5];
// for (let i = 0 i <= numbers.length, i++){
// console.log(`Number: ${numbers[i]`}
// }

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   console.log(`Number: ${element}`);
// }

// function withdrawMoney(balance) {
//   const totalMoney = 10000;

//   if (balance > totalMoney) {
//     return "Insufficient funds";
//   } else {
//     return `Please take your ${balance} cash`;
//   }
// }
// console.log(withdrawMoney(12000));

// function getGrade(score) {
//   if (score >= 90) {
//     console.log("Grade A");
//   } else if (score >= 80) {
//     console.log("Grade B");
//   } else if (score >= 70) {
//     console.log("Grade C");
//   } else if (score >= 60) {
//     console.log("Grade D");
//   } else if (score >= 50) {
//     console.log("Grade E");
//   } else {
//     console.log("Grade F");
//   }
// }

// console.log(getGrade(60));

// function checkEligibility(age, hasCompletedCourse) {
//   const requiredAge = 18;

//   if (age < requiredAge) {
//     console.log(
//       `You are not eligible. You need ${
//         requiredAge - age
//       } more years to be eligible.`
//     );
//   } else if (!hasCompletedCourse) {
//     console.log("You are not eligible to apply for a driver's license.");
//   } else {
//     console.log("You are eligible to apply for a driver's license.");
//   }
// }
// console.log(checkEligibility(16, true));

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `Your BMI is ${bmi}. You are in the ${category} category.`;
}
console.log(calculateBMI(50, 1.6));
