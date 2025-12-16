import { entries } from './state.js';
import { type Entry } from './type.js';

export const addNewEntry = (entry: Entry) => {
  if (!entry.description || Number.isNaN(entry.amount)) return;

  entries.push({
    description: entry.description,
    amount: entry.amount,
    type: entry.type,
  });
};
