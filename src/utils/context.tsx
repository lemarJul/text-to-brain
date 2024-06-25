import React, { createContext, useState, useContext, useMemo } from "react";

export type AppContextType = {
  difficulty: 0 | 1 | 2 | 3;
  setDifficulty: React.Dispatch<
    React.SetStateAction<AppContextType["difficulty"]>
  >;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [difficulty, setDifficulty] = useState<0 | 1 | 2 | 3>(0);
  const [editMode, setEditMode] = useState(true);
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
          difficulty,
          setDifficulty,
          editMode,
          setEditMode,
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
      difficulty,
      setDifficulty,
      editMode,
      setEditMode,
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
