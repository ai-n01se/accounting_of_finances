console.log('Hello, Accounting of Finances!');

import { addNewEntry } from './addNewEntries';

const balanceReturn = document.getElementById('balance_number');
const incomeReturn = document.getElementById('income_number');
const costReturn = document.getElementById('cost_number');

let balance: number = 0;
let income: number = 0;
let cost: number = 0;

const listEntries = document.getElementById('finance_list');

export const entries: Array<{
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

export const render = () => {
  if (balanceReturn) balanceReturn.innerText = balance.toString();
  if (incomeReturn) incomeReturn.innerText = income.toString();
  if (costReturn) costReturn.innerText = cost.toString();
};

btnAdd?.addEventListener('click', () => {
  const description = inputDescription.value;
  const amount = parseFloat(inputAmount.value);
  const type = inputType.value as 'income' | 'cost';

  addNewEntry(description, amount, type);

  render();
});

render();
