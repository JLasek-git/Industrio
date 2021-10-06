import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function currencyFormat(num) {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}

