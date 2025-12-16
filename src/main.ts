console.log('Hello, Accounting of Finances!');

const balanceReturn = document.getElementById('balance_number');
const incomeReturn = document.getElementById('income_number');
const costReturn = document.getElementById('cost_number');

let balance: number = 0;
let income: number = 0;
let cost: number = 0;

const listEntries = document.getElementById('finance_list');

const entries: Array<{
  description: string;
  amount: number;
  type: 'income' | 'cost';
}> = [];

const btnAdd = document.getElementById('submit');
const inputDescription = document.getElementById(
  'description'
) as HTMLInputElement;
const inputAmount = document.getElementById('amount') as HTMLInputElement;
const inputType = document.getElementById('type') as HTMLSelectElement;

const render = () => {
  if (balanceReturn) balanceReturn.innerText = balance.toString();
  if (incomeReturn) incomeReturn.innerText = income.toString();
  if (costReturn) costReturn.innerText = cost.toString();
};

render();
