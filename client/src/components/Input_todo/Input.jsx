import { useState } from 'react'
import style from './Input.module.css'
import { randomId } from '../../index'

export function Input({ setItems }) {
  let [title, setTitle] = useState('')

  let func2 = () => {
    let a = {
      id: randomId(24),
      title: title,
      edit: false,
      checked: false,
    };
    setItems(a);
    setTitle(''); 
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Создать новую заметку"
        className={style.input}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className={style.button} onClick={() => func2()}>
        Создать
      </button>
    </div>
  );
}

