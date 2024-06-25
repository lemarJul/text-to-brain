import React, { createContext, useState, useContext, useMemo } from "react";

export const CARD_MODES = {
  EDIT: -1,
  NONE: 0,
  WORD: 1,
  SENTENCE: 2,
  PARAGRAPH: 3,
} as const;
export type CardModeType = (typeof CARD_MODES)[keyof typeof CARD_MODES];

export type AppContextType = {
  cardMode: CardModeType;
  setCardMode: React.Dispatch<React.SetStateAction<CardModeType>>;
  showWordLength: boolean;
  setShowWordLength: React.Dispatch<React.SetStateAction<boolean>>;
  textContent: string;
  setTextContent: (text: string) => void;
  showAbout: boolean;
  setShowAbout: React.Dispatch<React.SetStateAction<boolean>>;
  // Add other state variables here
};

const AppContext = createContext<AppContextType | undefined>(undefined); // Create a context with the initial value of undefined

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardMode, setCardMode] = useState<CardModeType>(CARD_MODES.EDIT);
  const [showWordLength, setShowWordLength] = useState(true);
  const [textContent, setTextContent] = useState(
    localStorage.getItem("textContent") || ""
  );
  const [showAbout, setShowAbout] = useState(false);
  // Initialize other state variables here

  return useMemo(
    () => (
      <AppContext.Provider
        value={{
          cardMode,
          setCardMode,
          showWordLength,
          setShowWordLength,
          textContent,
          setTextContent: (text: string) => {
            //save to local storage
            localStorage.setItem("textContent", text);
            setTextContent(text);
          },
          showAbout,
          setShowAbout,
        }}
      >
        {children}
      </AppContext.Provider>
    ),
    [
      cardMode,
      setCardMode,
      showWordLength,
      setShowWordLength,
      textContent,
      setTextContent,
      showAbout,
      setShowAbout,
      // Add other state variables here
    ]
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
