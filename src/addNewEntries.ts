import { entries } from './main.js';

interface Entry {
  description: string;
  amount: number;
  type: 'income' | 'cost';
}

export const addNewEntry = (Entry: Entry) => {
  entries.push({
    description: Entry.description,
    amount: Entry.amount,
    type: Entry.type,
  });
};
