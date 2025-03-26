import { ListItem } from '../ListItem_todo/ListItem'
import style from './List.module.css'

export function List({items, toogler, editMode, deleteItem}) {

  return (
    <ul className={style.ul}>
      {items.map(el => <ListItem 
                          key={el.id} 
                          id={el.id} 
                          title={el.title} 
                          isEdit={el.isEdit}
                          isChecked={el.isChecked} 
                          toogler={toogler} 
                          editMode={editMode}
                          deleteItem={deleteItem}
                        />)}
    </ul>
  )
}
