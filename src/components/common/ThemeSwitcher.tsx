"use client"
import React, { useEffect, useState } from "react";
import IconBase from "../icon/IconBase";
import { useMessages } from "next-intl";

const ThemeSwitcher = () => {
  const messages: any = useMessages();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const handleThemeMode = () => {
    setIsDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;

      if (newIsDarkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("dark", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.removeItem("dark");
      }

      return newIsDarkMode;
    });
  };
  const toggleThemeMode = () => {
    if (localStorage.getItem("dark")) {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      localStorage.removeItem("dark");
    }
  };
  useEffect(() => {
    toggleThemeMode();
  });
  return (
    <div className="group flex items-center justify-between w-full px-2 py-2 rounded hover:bg-grayLight2 transition-all">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <IconBase icon="solar:moon-linear" className="text-black text-base" />
        <p className="min-w-max md:min-w-auto font-mainMedium text-xs text-black">
          {messages["dark_mode"]}
        </p>
      </div>
      <label
        htmlFor="themeCheckbox"
        className="relative flex items-center ml-4 md:ml-0 p-0.5 w-[39px] h-[20px] rounded-full bg-grayLight2 cursor-pointer group-hover:bg-white transition-all"
      >
        <input
          type="checkbox"
          onChange={handleThemeMode}
          value="themeMode"
          checked={isDarkMode}
          className="peer sr-only"
          id="themeCheckbox"
        />
        <div className="w-[15px] h-[15px] rounded-full bg-grayDark peer-checked:translate-x-[20px] transition-all"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
