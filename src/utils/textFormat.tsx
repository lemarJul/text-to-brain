export const MASK_LEVEL = {
  NONE: 0,
  WORD: 1,
  SENTENCE: 2,
  PARAGRAPH: 3,
} as const;
type MaskLevel = (typeof MASK_LEVEL)[keyof typeof MASK_LEVEL];

const MASK_MODE = {
  EXCEPT_FIRST: -1,
  ALL: 0,
  NONE: 1,
} as const;
type MaskMode = (typeof MASK_MODE)[keyof typeof MASK_MODE];

export function maskText(
  txt: string,
  maskLevel: MaskLevel,
  ShowWordLength = true
) {
  const rx_paragraph = /[\n]/g;
  const rx_sentence = /(?<=[\.\?\:\;\!])/g; // split by dot character but keep it in the result
  const rx_word = /(?<=\ )/g; // split by space character but keep it in the result
  const maskChar = ShowWordLength ? "_" : "";

  return txt.split(rx_paragraph).map((paragraph) =>
    paragraph.split(rx_sentence).map((sentence, sentenceIndex) =>
      sentence
        .trim()
        .split(rx_word)
        .map((word, wordIndex) => {
          const isFirstParagraphWord = wordIndex == 0 && sentenceIndex === 0;
          const isFirstSentenceWord = wordIndex === 0;

          const maskStrategies = new Map([
            [MASK_LEVEL.NONE, () => word],
            [
              MASK_LEVEL.WORD,
              () => applyMask(word, MASK_MODE.EXCEPT_FIRST, maskChar),
            ],
            [
              MASK_LEVEL.SENTENCE,
              () =>
                applyMask(
                  word,
                  isFirstSentenceWord ? MASK_MODE.EXCEPT_FIRST : MASK_MODE.ALL,
                  maskChar
                ),
            ],
            [
              MASK_LEVEL.PARAGRAPH,
              () =>
                applyMask(
                  word,
                  isFirstParagraphWord ? MASK_MODE.EXCEPT_FIRST : MASK_MODE.ALL,
                  maskChar
                ),
            ],
          ]);

          const maskStrategy = maskStrategies.get(maskLevel);
          return {
            raw: word,
            masked: maskStrategy ? maskStrategy() : word,
          };
        })
    )
  );
}

function applyMask(txt: string, maskMode: MaskMode, maskChar = "_") {
  const alphaNum = /[A-Za-zÀ-Üà-ü0-9]/g;
  const firstAndRest = new RegExp(
    `(${alphaNum.source})(${alphaNum.source}*)`,
    "gm"
  );
  return txt.replace(firstAndRest, (_match, _first, _rest) => {
    const first = maskMode === MASK_MODE.ALL ? maskChar : _first;
    const rest =
      maskMode === MASK_MODE.NONE ? _rest : _rest.replace(alphaNum, maskChar);
    return first + rest;
  });
}
