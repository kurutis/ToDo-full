import { ListItem } from '../ListItem_note/ListItem'
import s from './List.module.css'

export let List = ({notes, setIndex, refa}) => {
    return (
        <ul className={s.ul}>
            {notes.map((el, i) => <ListItem refa={refa} i={i} setIndex={setIndex} key={i} text={el}/>)}
        </ul>
    )    
}