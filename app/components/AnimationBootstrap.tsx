"use client";

import { useEffect } from "react";

export default function AnimationBootstrap() {
  useEffect(() => {
    const root = document.documentElement;

    function startAnimations() {
      root.classList.add("animations-ready");
    }

    startAnimations();
    window.addEventListener("pageshow", startAnimations);

    return () => {
      window.removeEventListener("pageshow", startAnimations);
    };
  }, []);

  return null;
}
