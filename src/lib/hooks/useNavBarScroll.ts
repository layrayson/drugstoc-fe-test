import { useState, useCallback, useEffect } from "react";

export const useNavBarScroll = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavBar(false);
      console.log("hide");
    } else {
      setShowNavBar(true);
      console.log("show");
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { showNavBar };
};
