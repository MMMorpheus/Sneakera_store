import { useCallback } from "react";

export const useScrollLock = () => {
  const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);
  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "";
  }, []);
  return {lockScroll, unlockScroll};
};
