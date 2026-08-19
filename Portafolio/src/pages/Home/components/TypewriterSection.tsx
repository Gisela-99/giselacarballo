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

  const outputRef = useRef("");

  // 🔑 Bandera clave del fix: evita que dos secuencias corran a la vez
  // cuando React StrictMode monta el efecto dos veces en desarrollo.
  const cancelledRef = useRef(false);

  const cursor = "|";

  useEffect(() => {
    cancelledRef.current = false;

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
      return () => {
        observer.disconnect();
        cancelledRef.current = true;
      };
    } else {
      runSequence();
      return () => {
        cancelledRef.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runSequence = async () => {
    setIsTyping(true);
    do {
      for (const step of steps || []) {
        if (cancelledRef.current) return;
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
    } while (loop && !cancelledRef.current);

    if (!cancelledRef.current) setIsTyping(false);
  };

  const typeText = async (text: string) => {
    for (let i = 0; i < text.length; i++) {
      if (cancelledRef.current) return;
      setOutput((prev) => {
        const next = prev + text[i];
        outputRef.current = next;
        return next;
      });
      const randomSpeed = speed + Math.random() * speed * 0.8;
      await wait(randomSpeed);
    }
  };

  const deleteText = async (count: number | "all") => {
    const total = count === "all" ? outputRef.current.length : count;

    for (let i = 0; i < total; i++) {
      if (cancelledRef.current) return;
      setOutput((prev) => {
        const next = prev.slice(0, -1);
        outputRef.current = next;
        return next;
      });
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