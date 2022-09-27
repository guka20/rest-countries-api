import React, { useContext } from "react";
import { ThemeContext } from "../App";
export const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <main className="home-page">
      <header className="home-page-head">
        <input
          placeholder="Search for a country"
          type="search"
          style={{
            backgroundColor: theme.secondary.bgcolor,
            color: theme.color,
          }}
        />
        
      </header>
    </main>
  );
};
