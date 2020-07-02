import React from 'react'
import './items.css'
function Items(props) {
 const {items} = props
    const ListItems = items.map(item =>{
        return item.age > 18 ?(
            <div key={item.id} className='container'>
                <p>name is :{item.name} and has {item.skills} skills</p>
            </div>
        ): null

    } )
    return(
        <div>
            { ListItems}
        </div>
    )
}

export default Items
