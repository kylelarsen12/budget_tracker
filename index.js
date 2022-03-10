let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

//Iterate through user's weekly answers, convert to float, and sum total
for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
  console.log(answer);
  weeklyExpenses += answer;
}

//Monthly
for (let i = 0; i < monthlyExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]));
  console.log(answer);
  monthlyExpenses += answer;
}

//Annual
for (let i = 0; i < annualExpenseQuestions.length; i++) {
  let answer = parseFloat(window.prompt(annualExpenseQuestions[i]));
  console.log(answer);
  annualExpenses += answer;
}

//same thing with while loops
let i = 0;
while (i < weeklyExpenses.length) {
  let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]));
  console.log(answer);
  weeklyExpenses += answer;
  i++;
}
