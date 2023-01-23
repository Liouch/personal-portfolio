import { createContext, useContext } from 'react';

export type AccordionContextType = {
  isOpen: boolean;
  index: number;
};

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);
AccordionContext.displayName = 'AccordionContext';

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`useAccordion must be used within a AccordionProvider`);
  }
  return context;
};
