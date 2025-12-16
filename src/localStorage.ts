import { entries } from './state.js';

export const saveEntriesToLocalStorage = () => {
  localStorage.setItem('entries', JSON.stringify(entries));
};

export const loadEntriesFromLocalStorage = () => {
  const storedEntries = localStorage.getItem('entries');
  if (storedEntries) {
    entries.push(...JSON.parse(storedEntries));
  }
};
