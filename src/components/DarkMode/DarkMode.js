import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './darkMode.module.css';

const DarkMode = () => {
    const { mode, toggleMode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggleMode}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div
                className={styles.ball}
                style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
            />
        </div>
    );
};

export default DarkMode;
