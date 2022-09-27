import { useState, createContext } from "react";
import { Navbar } from "./Modules/Navbar";
import { darkTheme, lightTheme } from "./styles/theme";
import "./style.scss";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers/Routers";
export const ThemeContext = createContext(lightTheme);
function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
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
