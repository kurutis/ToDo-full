import { useState } from 'react'
import s from './Note.module.css'

export let Note = ({ notes, setNotes, index, refa }) => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleCreateNote = () => {
    const noteText = textAreaValue.trim() || 'Пусто';
    setNotes(prevNotes => [...prevNotes, noteText]);
    setTextAreaValue('');
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <>
      <textarea
        className={s.text}
        value={textAreaValue}
        onChange={handleTextAreaChange} 
        ref={refa}
      />
      <br />
      <button className={s.create} onClick={handleCreateNote}>
        Создать новую запись
      </button>
    </>
  );
};

