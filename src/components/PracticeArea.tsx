import React from "react";
import Word from "./Word";
import { useAppContext } from "../utils/context";
import { formatText } from "../utils/textFormat";

export default function PracticeArea({ className }) {
  const { textContent, showWordLength, difficulty } = useAppContext();

  const showText = difficulty == 0;

  const formattedParagraphes = formatText(
    textContent,
    showText,
    showWordLength
  );
  console.log(formattedParagraphes);

  return (
    <span className={className}>
      {formattedParagraphes?.map((paraghraph, i) => (
        <p key={i}>
          {paraghraph.map((word, j) => (
            <Word
              key={j}
              rawValue={word.raw}
              displayValue={difficulty == 0 ? word.raw : word.formatted}
            />
          ))}
        </p>
      ))}
    </span>
  );
}
