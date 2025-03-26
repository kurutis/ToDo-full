import { useState } from 'react'
import s from './Todo.module.css'
import { Input } from '../../components/Input_todo/Input'
import { List } from '../../components/List_todo/List'
import { useLoaderData } from 'react-router-dom'


export let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('ToDo'))
    if (arr) {
        return arr
    } 
    return []
}

export function Todo() {
    let arr = useLoaderData()
    let [items, setItems] = useState(arr)
    console.log(items);

    let toLocal = (copy) => {
        localStorage.setItem('ToDo', JSON.stringify(copy))
        setItems(copy)
    }

    let func = el => {
        let copy = [...items, el]
        toLocal(copy)
    }

    let toogler = (id, field) => {
        let copy = items.map(el => {
        if(el.id === id){
            el[field] = !el[field]
        }
        return el
        })
        toLocal(copy)
    }

    let editMode = (e, id, field) => {
        let copy = items.map(el => {
        if(el.id === id){
            el[field] = e.target.value
        }
        return el
        })
        toLocal(copy)
    }

    let deleteItem = id => {
        let copy = items.filter(el => el.id !== id)
        toLocal(copy)
    }
    
    return (
        <div className={s.appContainer}>
        <h1 className={s.h1}>TODO LIST</h1>
        <Input setItems={func}/>
        <List items={items} toogler={toogler} editMode={editMode} deleteItem={deleteItem}/>
        </div>
    )
    }


