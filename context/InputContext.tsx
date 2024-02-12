'use client';
import { createContext, ReactNode, useContext, useState } from 'react';

interface InputContextData {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputContext = createContext<InputContextData>({} as InputContextData);

export const InputProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValueInternal] = useState('');

  const setInputValue = (value: string) => {
    setInputValueInternal(value);
  };

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputValue = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useInputValue must be used within an InputProvider');
  }

  return context;
};