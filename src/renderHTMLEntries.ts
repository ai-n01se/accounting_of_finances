import { entries } from './main.js';

export const renderHTMLEntries = (listElement: HTMLElement) => {
  listElement.innerHTML = '';

  entries.reverse().forEach((entry) => {
    const li = document.createElement('li');

    const amount = document.createElement('p');
    const description = document.createElement('p');
    const type = document.createElement('p');

    amount.textContent =
      entry.type === 'income' ? `+${entry.amount}` : `-${entry.amount}`;
    description.textContent = entry.description;
    type.textContent = entry.type;

    li.appendChild(amount);
    li.appendChild(description);
    li.appendChild(type);

    listElement.appendChild(li);
  });
};
