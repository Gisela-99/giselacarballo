import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";

type Step =
  | { type: "write"; text: string }
  | { type: "pause"; duration: number }
  | { type: "delete"; count: number | "all" };

interface TypewriterProps {
  steps?: Step[];
  speed?: number;
  loop?: boolean;
  triggerOnScroll?: boolean;
  className?: string;
  hideCursorWhenDone?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  steps,
  speed = 50,
  loop = false,
  triggerOnScroll = true,
  className = "",
  hideCursorWhenDone = false,
}) => {
  const [output, setOutput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const started = useRef(!triggerOnScroll);

  const cursor = "|";

  useEffect(() => {
    if (triggerOnScroll) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            runSequence();
          }
        },
        { threshold: 0.1 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      runSequence();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runSequence = async () => {
    setIsTyping(true);
    do {
      for (const step of steps || []) {
        if (step.type === "write") {
          await typeText(step.text);
        }
        if (step.type === "pause") {
          await wait(step.duration);
        }
        if (step.type === "delete") {
          await deleteText(step.count);
        }
      }
    } while (loop);

    setIsTyping(false);
  };

  const typeText = async (text: string) => {
    for (let i = 0; i < text.length; i++) {
      setOutput((prev) => prev + text[i]);
      const randomSpeed = speed + Math.random() * speed * 0.8;
      await wait(randomSpeed);
    }
  };

  const deleteText = async (count: number | "all") => {
    const total = count === "all" ? output.length : count;
    for (let i = 0; i < total; i++) {
      setOutput((prev) => prev.slice(0, -1));
      const randomSpeed = speed * 0.6 + Math.random() * speed * 0.4;
      await wait(randomSpeed);
    }
  };

  const wait = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  const showCursor = !(hideCursorWhenDone && !isTyping);

  return (
    <div ref={containerRef} className={className} aria-live="polite">
      {output}
      {showCursor && (
        <span className={`${styles.cursor} ${!isTyping ? styles.cursorStatic : ""}`}>
          {cursor}
        </span>
      )}
    </div>
  );
};

export default Typewriter;