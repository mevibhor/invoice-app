import { useState, useEffect } from "react";
import FormDrawer from "./FormDrawer";
import logo from "../assets/logo.png";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import profile from "../assets/image-avatar.jpg";
import "./../Index.css";

const Navbar = ({ isOpen, onClose, receiptData, setWholeData }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const themeIcon = theme === "dark" ? sun : moon;

  return (
    <>
      {isOpen && (
        <FormDrawer
          isOpen={isOpen}
          onClose={onClose}
          receiptData={receiptData}
          setWholeData={setWholeData}
        />
      )}
      <div
        className="
          relative md:fixed top-0 left-0 right-0 
          md:top-0 md:left-0 md:bottom-0 md:right-auto
          flex flex-row md:flex-col
          bg-[#373B53] 
          shadow-md md:rounded-b-none md:rounded-r-3xl
          h-20 md:h-full
          w-full md:w-20
          px-6 md:px-0
          justify-between items-center
        "
      >
        <span className="flex items-center justify-center">
          <img src={logo} alt="logo" className="h-16 md:h-20" />
        </span>

        <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:mb-8">
          <img
            src={themeIcon}
            alt="theme-icon"
            className="cursor-pointer h-4 w-4 md:h-6 md:w-6"
            onClick={toggleTheme}
          />

          {/* Divider: vertical on mobile, horizontal on desktop */}
          <div className="h-16 w-px md:h-px md:w-16 bg-slate-500 dark:bg-slate-600 md:my-4"></div>

          <img
            src={profile}
            alt="profile"
            className="profile rounded-full h-8 w-8 md:h-12 md:w-12"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
