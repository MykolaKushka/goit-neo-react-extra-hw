import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters.name;

// Мемоізований селектор для фільтрації контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
