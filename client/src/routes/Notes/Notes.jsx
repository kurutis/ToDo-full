import { useRef, useState } from 'react'
import s from './Notes.module.css'
import { useLoaderData } from 'react-router-dom'
import {List} from '../../components/List_note/List'
import {Note} from '../../components/Note_note/Note'


export let loader = async () => {
    let arr = JSON.parse(localStorage.getItem('Notes'))
    if (arr) {
        return arr
    } 
    return []
}



export const Notes = () => {
    let arr = useLoaderData()
    let [notes, setNotes] = useState(arr)
    let [index, setIndex] = useState(-1)
    let ref = useRef(null)
  
    return (
        <>
        <h1>NOTEBOOK</h1>
        <div lassName={s.div}>
            <Note refa={ref} notes={notes} setNotes={setNotes} index={index}/>
            <List refa={ref} notes={notes} setIndex={setIndex}/>
        </div>
        </>
    )
}
