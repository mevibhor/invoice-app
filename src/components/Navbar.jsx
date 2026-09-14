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
      <div className="fixed top-0 bottom-0 mobile:relative bg-sidebar rounded-t-3xl rounded-br-3xl mobile:flex mobile:justify-between mobile:rounded-none">
        <img src={logo} alt="app-logo" className="relative" />
        <div className="flex items-center justify-center mobile:w-32">
          <img
            src={themeIcon}
            alt="dark-mode"
            className="cursor-pointer p-1 absolute bottom-32 left-9 flex justify-center mobile:relative mobile:bottom-0"
            onClick={toggleTheme}
          />
          <div className="w-full h-px bg-slate-400 absolute bottom-24 mobile:hidden"></div>

          <img
            src={profile}
            alt="profile"
            className="rounded-full h-11 absolute bottom-6 left-7 mobile:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
