'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext({
    mode: 'dark',
    toggleMode: function toggleMode() {}
});

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');
    const toggleMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider
            value={{
                mode,
                toggleMode
            }}
        >
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
