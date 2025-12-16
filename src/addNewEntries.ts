import { entries } from './main';

export const addNewEntry = (
  description: string,
  amount: number,
  type: 'income' | 'cost'
) => {
  entries.push({
    description,
    amount,
    type,
  });
};
