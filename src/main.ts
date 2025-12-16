console.log('Hello, Accounting of Finances!');

import { addNewEntry } from './addNewEntries.js';
import { updateBalance } from './updateBalance.js';
import { renderHTMLEntries } from './renderHTMLEntries.js';

const balanceReturn = document.getElementById('balance_number');
const incomeReturn = document.getElementById('income_number');
const costReturn = document.getElementById('cost_number');

const listEntries = document.getElementById('finance_list');

export const entries: Array<{
  description: string;
  amount: number;
  type: 'income' | 'cost';
}> = [];

const form = document.getElementById('finance_form') as HTMLFormElement;
const btnAdd = document.getElementById('submit');
const inputDescription = document.getElementById(
  'finance_description'
) as HTMLInputElement;
const inputAmount = document.getElementById(
  'finance_amount'
) as HTMLInputElement;
const inputType = document.getElementById('finance_type') as HTMLSelectElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

export const render = () => {
  const { balance, income, cost } = updateBalance();

  if (balanceReturn) balanceReturn.innerText = balance.toString();
  if (incomeReturn) incomeReturn.innerText = income.toString();
  if (costReturn) costReturn.innerText = cost.toString();

  inputDescription.value = '';
  inputAmount.value = '';

  if (listEntries) renderHTMLEntries(listEntries);
};

btnAdd?.addEventListener('click', () => {
  const description = inputDescription.value;
  const amount = parseFloat(inputAmount.value);
  const type = inputType.value as 'income' | 'cost';

  addNewEntry({ description, amount, type });

  render();
});

render();
