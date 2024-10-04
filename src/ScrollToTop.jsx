import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToTop from "./ScrollToTop";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return null;
};

export default ScrollToTop;
