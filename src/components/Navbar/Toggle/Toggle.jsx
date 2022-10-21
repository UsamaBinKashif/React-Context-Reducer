import React, { useState } from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div
        className="flex items-center gap-1  cursor-pointer text-sm font-bold
          "
        onClick={changeTheme}
      >
        <h4 >{darkMode ? "Light" : "Dark"}</h4>
        <button >{darkMode ? ' 🌞' : '🌙'}</button>
      </div>
    </>
  );
}