let saveIncome = document.getElementById("saveIncome");
let saveExpense = document.getElementById("saveExpense");
let totalIncomes = document.getElementById("totalIncomes");

function Incomes(income, incomeAmount) {
  this.income = income;
  this.incomeAmount = incomeAmount;
}

function Expenses(expense, expenseAmount) {
  this.expense = expense;
  this.expenseAmount = expenseAmount;
}

//saving incomes
saveIncome.addEventListener("click", () => {
  let income = document.getElementById("income").value;
  let incomeAmount = document.getElementById("incomeAmount").value;
  let newDataIncomes = new Incomes(income, incomeAmount);
  if (localStorage.getItem("incomes") === null) {
    localStorage.setItem("incomes", "[]");
  }
  //incomes
  var OldDataIncomes = JSON.parse(localStorage.getItem("incomes"));
  if (newDataIncomes === "") {
    OldDataIncomes;
  } else {
    OldDataIncomes.push(newDataIncomes);
  }

  localStorage.setItem("incomes", JSON.stringify(OldDataIncomes));
  location.reload();
});

//saving expenses
saveExpense.addEventListener("click", () => {
  let expense = document.getElementById("expense").value;
  let expenseAmount = document.getElementById("expenseAmount").value;
  let newDataExpenses = new Expenses(expense, expenseAmount);
  console.log(newDataExpenses);
  if (localStorage.getItem("expenses") === null) {
    localStorage.setItem("expenses", "[]");
  }
  //expenses
  var OldDataExpenses = JSON.parse(localStorage.getItem("expenses"));
  if (newDataExpenses === "") {
    OldDataExpenses;
  } else {
    OldDataExpenses.push(newDataExpenses);
  }

  localStorage.setItem("expenses", JSON.stringify(OldDataExpenses));
  location.reload();
});

//incomes
if (localStorage.getItem("incomes") != null) {
  let incomes = JSON.parse(localStorage.getItem("incomes"));
  console.log(incomes);

  let totalIncomes = 0;
  incomes.forEach((name) => {
    document.getElementById(
      "totalIncomes"
    ).innerHTML += `${name.income}(R${name.incomeAmount})<br/>`;
    totalIncomes += Number(name.incomeAmount);
    document.getElementById("totalIncomesBal").value = `${totalIncomes}`;
  });
}
//expenses
if (localStorage.getItem("expenses") != null) {
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  console.log(expenses);

  let totalExpenses = 0;
  expenses.forEach((name) => {
    document.getElementById(
      "totalExpenses"
    ).innerHTML += `${name.expense}(R${name.expenseAmount})<br/>`;
    totalExpenses += Number(name.expenseAmount);
    document.getElementById("totalExpensesBal").value = `${totalExpenses}`;
  });
}

cashAvailable.value = totalIncomesBal.value - totalExpensesBal.value;
document.getElementById("clearAll").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
