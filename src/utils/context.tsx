import React, { createContext, useState, useContext } from "react";

type AppContextType = {
  difficulty: 0 | 1 | 2 | 3;
  setDifficulty: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  showWordLength: boolean;
  setShowWordLength: React.Dispatch<React.SetStateAction<boolean>>;
  textContent: string;
  setTextContent: (text: string) => void;
  // Add other state variables here
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [difficulty, setDifficulty] = useState<0 | 1 | 2 | 3>(0);
  const [editMode, setEditMode] = useState(true);
  const [showWordLength, setShowWordLength] = useState(true);
  const [textContent, setTextContent] = useState(
    localStorage.getItem("textContent") || ""
  );
  // Initialize other state variables here

  return (
    <AppContext.Provider
      value={{
        difficulty,
        setDifficulty,
        editMode,
        setEditMode /* Add other state variables here */,
        showWordLength,
        setShowWordLength,
        textContent,
        setTextContent: (text: string) => {
          //save to local storage
          localStorage.setItem("textContent", text);
          setTextContent(text);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
