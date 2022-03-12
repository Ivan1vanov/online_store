import {observer} from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <div>
<ul className="list-group">
    <ListGroup>
    {device.types.map(type => (
    <li className="list-group-item" key={type.id}>
        <ListGroup.Item
        style={{cursor: 'pointer'}}
        active={type.id === device.selectedType.id}
        onClick={() => device.setSelectedType(type)}
        >
        {type.name}
        </ListGroup.Item>
        
    </li>
    ))}
    </ListGroup>
</ul>
    </div>
  )
})

export default TypeBar