"use client";
import { useState, useEffect } from "react";

export const useDetectWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      setWindowWidth(document.documentElement.clientWidth);
    }

    const handleResize = () => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        setWindowWidth(document.documentElement.clientWidth);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  return windowWidth;
};
