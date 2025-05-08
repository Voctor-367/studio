import React, { useEffect, useState } from "react";

interface AnimatedWordItem {
  text: string;
  color?: string;
}

interface AnimatedWordProps {
  words: (string | AnimatedWordItem)[];
  interval?: number;
}

const HACK_CHARS = "█▓▒░▌▐▄▀■□▲△●○◆◇".split("");

function randomizeWord(word: string) {
  return word
    .split("")
    .map((char) =>
      Math.random() < 0.5 ? HACK_CHARS[Math.floor(Math.random() * HACK_CHARS.length)] : char
    )
    .join("");
}

function getWord(item: string | AnimatedWordItem): string {
  return typeof item === "string" ? item : item.text;
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ words, interval = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(getWord(words[0]));
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 350);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  useEffect(() => {
    if (animating) {
      let frame = 0;
      const maxFrames = 6;
      const glitch = setInterval(() => {
        setDisplay(randomizeWord(getWord(words[index])));
        frame++;
        if (frame > maxFrames) {
          clearInterval(glitch);
          setDisplay(getWord(words[(index + 1) % words.length]));
        }
      }, 40);
      return () => clearInterval(glitch);
    } else {
      setDisplay(getWord(words[index]));
    }
  }, [animating, index, words]);

  // Aplica o glow ao redor de cada letra individualmente
  return (
    <span
      className={`
        inline-block font-mono px-2 py-1 rounded
        transition-all duration-300
        relative
      `}
      style={{
        letterSpacing: "0.04em",
      }}
      aria-live="polite"
    >
      {display.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            color: "#edf3f7",
            textShadow:
              "0 0 2px #fff, 0 0 4px #fff",
            filter: animating ? "brightness(1.2)" : undefined,
            transition: "filter 0.2s",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedWord;
