import React, { createContext, useState, useEffect } from "react";

// Create a Context for the theme
export const ThemeContext = createContext();

// Create a ThemeProvider component that will provide the theme and the toggle function
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Set the theme on the body element when it changes
    useEffect(() => {
        document.body.className = theme; // Add the theme class to the body
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
