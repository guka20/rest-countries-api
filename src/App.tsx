import { useState, createContext, useEffect } from "react";
import { Navbar } from "./Modules/Navbar";
import { darkTheme, lightTheme } from "./styles/theme";
import "./style.scss";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers/Routers";
export const ThemeContext = createContext(lightTheme);
function App() {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("isDark") !== null
  );
  useEffect(() => {
    let isDarkTheme = localStorage.getItem("isDark");
    isDarkTheme === null
      ? localStorage.setItem("isDark", JSON.stringify(isDark))
      : isDarkTheme === "true"
      ? setIsDark(true)
      : setIsDark(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={isDark ? darkTheme : lightTheme}>
        <div
          className="app"
          style={{
            backgroundColor: isDark
              ? darkTheme.primary.bgcolor
              : lightTheme.primary.bgcolor,
          }}
        >
          <Navbar isDark={isDark} setIsDark={setIsDark} />
          <Routers />
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
