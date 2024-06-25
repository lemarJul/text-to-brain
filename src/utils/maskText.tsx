import { CARD_MODES, CardModeType } from "./context";

const LETTER_MASKS = {
  EXCEPT_FIRST: -1,
  ALL: 0,
  NONE: 1,
} as const;
type LetterMaskType = (typeof LETTER_MASKS)[keyof typeof LETTER_MASKS];

export function maskText(
  txt: string,
  mode: CardModeType,
  ShowWordLength = true
) {
  const rx_paragraph = /[\n]/g;
  const rx_sentence = /(?<=[\.\?\:\;\!])/g; // split by dot character but keep it in the result
  const rx_word = /(?<=\ )/g; // split by space character but keep it in the result

  return txt.split(rx_paragraph).map((paragraph) =>
    paragraph.split(rx_sentence).map((sentence, sentenceIndex) =>
      sentence
        .trim()
        .split(rx_word)
        .map((word, wordIndex) => {
          const isFirstParagraphWord = wordIndex == 0 && sentenceIndex === 0;
          const isFirstSentenceWord = wordIndex === 0;
          const maskChar = ShowWordLength ? "_" : "";

          const maskStrategies = new Map([
            [CARD_MODES.EDIT, () => word],
            [CARD_MODES.NONE, () => word],
            [
              CARD_MODES.WORD,
              () => applyMask(word, LETTER_MASKS.EXCEPT_FIRST, maskChar),
            ],
            [
              CARD_MODES.SENTENCE,
              () =>
                applyMask(
                  word,
                  isFirstSentenceWord ? LETTER_MASKS.EXCEPT_FIRST : LETTER_MASKS.ALL,
                  maskChar
                ),
            ],
            [
              CARD_MODES.PARAGRAPH,
              () =>
                applyMask(
                  word,
                  isFirstParagraphWord ? LETTER_MASKS.EXCEPT_FIRST : LETTER_MASKS.ALL,
                  maskChar
                ),
            ],
          ]);

          const maskStrategy = maskStrategies.get(mode);
          return {
            raw: word,
            masked: maskStrategy ? maskStrategy() : word,
          };
        })
    )
  );
}

function applyMask(txt: string, maskMode: LetterMaskType, maskChar = "_") {
  const alphaNum = /[A-Za-zÀ-Üà-ü0-9]/g;
  const firstAndRest = new RegExp(
    `(${alphaNum.source})(${alphaNum.source}*)`,
    "gm"
  );
  return txt.replace(firstAndRest, (_match, _first, _rest) => {
    const first = maskMode === LETTER_MASKS.ALL ? maskChar : _first;
    const rest =
      maskMode === LETTER_MASKS.NONE ? _rest : _rest.replace(alphaNum, maskChar);
    return first + rest;
  });
}
