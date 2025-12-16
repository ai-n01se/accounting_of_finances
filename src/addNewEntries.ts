import { entries } from './state.js';
import { type Entry } from './type.js';

export const addNewEntry = (entry: Entry) => {
  entries.push({
    description: entry.description,
    amount: entry.amount,
    type: entry.type,
  });
};
