import { useState, useEffect } from "react";

/**
 * @description Custom hook to manage local storage state.
 * @param {function} useLocalStorage - Custom hook to manage local storage state.
 * @exports useLocalStorage - Used in <ToggleThemeButtom /> to manage theme state.
 * @param {string} key - The key under which to store the value in local storage.
 * @param {any} initialValue - The initial value to set if the key does not exist in local storage.
 * @return {[any, function]} - An array containing the stored value and a function to update it.
 * @throws {Error} - Throws an error if local storage is not available or if JSON parsing fails. 
 */

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};