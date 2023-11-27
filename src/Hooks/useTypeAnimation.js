import { useEffect, useState } from "react";

export default function useTypeAnimation() {
  const [text, setText] = useState("");
  const [runCounter, setRunCounter] = useState(0);

  useEffect(() => {
    let totalTimeout = 0;
    let timers = [];
    listOfDescriptions.forEach((description, i) => {
      let timer = setTimeout(() => {
        textWriter(
          description,
          setText,
          i === listOfDescriptions.length - 1,
          setRunCounter
        );
      }, totalTimeout);
      timers.push(timer);
      totalTimeout += description.length * 200 + 1000;
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [runCounter]);
  return [text];
}

const listOfDescriptions = [
  "a Full-stack developer.",
  "a problem solver.",
  "a critical thinker.",
  "a team player.",
];

const textWriter = (text, setText, isLast, setRunCounter) => {
  const textArr = text.split("");
  const iterations = new Array(text.length * 2).fill("_");
  iterations.forEach((_, i) => {
    if (i < textArr.length) {
      setTimeout(() => {
        setText((prev) => `${prev}${textArr[i]}`);
      }, i * 100);
    } else {
      setTimeout(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
        if (isLast && iterations.length - 1 === i) {
          setTimeout(() => {
            setRunCounter((c) => c + 1);
          }, 300);
        }
      }, i * 100 + 1000);
    }
  });
};
