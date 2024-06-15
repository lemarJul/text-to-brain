export const formatWord = (
  word: string,
  capitals = false,
  showLength = true,
  replacementChar = "_"
) => {
  return word.replace(
    /([A-Za-zÀ-Üà-ü0-9])([A-Za-zA-Za-zÀ-Üà-ü0-9]*)/gm,
    function (_match, first, rest) {
      const head = capitals ? first.toUpperCase() : first;
      const tail = showLength
        ? rest.replace(/[A-Za-zÀ-Üà-ü0-9]/g, replacementChar)
        : "";
      return head + tail;
    }
  );
};

export function formatText(
  text: string,
  showText: boolean,
  showWordLength: boolean,
  replacementChar = "_"
) {
  const paraghraphes = text.split(/[\n]/g);
  const format = (aParaghraph: string) => {
    return aParaghraph.split(" ").map((word) => ({
      raw: word,
      formatted: showText
        ? word
        : formatWord(word, true, showWordLength, replacementChar),
    }));
  };
  return paraghraphes.map(format);
}
