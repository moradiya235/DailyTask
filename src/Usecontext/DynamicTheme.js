import React, { useState, useContext, useEffect } from 'react';

const ThemeContext = React.createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  const storedLayout = localStorage.getItem('layout') || 'grid';

  const [theme, setTheme] = useState(storedTheme);
  const [layout, setLayout] = useState(storedLayout);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('layout', layout);
  }, [theme, layout]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === 'grid' ? 'list' : 'grid'));
  };

  return (
    <ThemeContext.Provider value={{ theme, layout, toggleTheme, toggleLayout }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  const { theme, layout, toggleTheme, toggleLayout } = useTheme();

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Dynamic Theme and Layout Switcher</h1>
      <button onClick={toggleTheme} className="button">
        Toggle Theme (Current: {theme})
      </button>
      <button onClick={toggleLayout} className="button">
        Toggle Layout (Current: {layout})
      </button>

      <div className={layout === 'grid' ? 'grid-layout' : 'list-layout'}>
        <div className="box">Item 1</div>
        <div className="box">Item 2</div>
        <div className="box">Item 3</div>
        <div className="box">Item 4</div>
      </div>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
