import { useState, useEffect, useRef } from 'react';
import s from './ListItem.module.css';

export let ListItem = ({ text, setIndex, i, updateNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    useEffect(() => {
        setCurrentText(text); 
    }, [text]);

    const handleBlur = () => {
        setIsEditing(false);
        updateNote(i, currentText.trim());
    };

    const handleClick = () => {
        setIndex(i);
        setIsEditing(true);
    };
    return (
        <li
            className={`${s.li} ${isEditing ? s.editing : ''}`}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {isEditing ? (
                <textarea
                    className={s.textarea}
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                currentText
            )}
        </li>
    );
};