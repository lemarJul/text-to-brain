import React from "react";
import Word from "./Word";
import { useAppContext } from "../utils/context";
import { maskText } from "../utils/textFormat";

export default function PracticeArea({
  className,
}: React.HTMLAttributes<HTMLSpanElement>): React.ReactNode {
  const { textContent, showWordLength, difficulty } = useAppContext();

  const maskedText = maskText(textContent, difficulty, showWordLength);

  return (
    <span className={className}>
      {maskedText.map((paragraph, i) => (
        <p key={i}>
          {paragraph.map((sentence, j) => (
            <span key={j}>
              {sentence.map((word, k) => (
                <Word key={k} rawValue={word.raw} displayValue={word.masked} />
              ))}
            </span>
          ))}
        </p>
      ))}
    </span>
  );
}
