import React from "react";

//Word is a span
type WordProps = React.HTMLAttributes<HTMLSpanElement> & {
  rawValue?: string;
  displayValue?: string;
};

function Word({ className, rawValue, displayValue, ...rest }: WordProps) {
  return (
    <span className={`word ${className || ""}`} data-value={rawValue} {...rest}>
      {displayValue}
    </span>
  );
}

export default Word;
