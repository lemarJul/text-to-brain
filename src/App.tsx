import "./App.css";
import TextArea from "./components/TextArea.tsx";
import { useState } from "react";
import Settings from "./components/Settings.tsx";
import TrainingField from "./components/TrainingField.tsx";

function App() {
  const [editMode, setEditMode] = useState(true);
  const [showOnlyFirst, setShowOnlyFirst] = useState(true);
  const [showLengthClue, setShowLengthClue] = useState(true);
  const [content, setContent] = useState("");

  return (
    <>
      <h1>Text to Brain</h1>
      <main className="card">
        <Settings
          editMode={editMode}
          setEditMode={setEditMode}
          showOnlyFirst={showOnlyFirst}
          setShowOnlyFirst={setShowOnlyFirst}
          showLengthClue={showLengthClue}
          setShowLengthClue={setShowLengthClue}
        />
        {editMode ? (
          <TextArea
            className="card__input"
            content={content}
            setContent={setContent}
          />
        ) : (
          <TrainingField className="card__output" content={content} />
        )}
      </main>
    </>
  );
}

export default App;
