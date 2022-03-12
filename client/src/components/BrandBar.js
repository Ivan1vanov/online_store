import React, { useContext } from 'react'
import { Card, ListGroup, Row } from 'react-bootstrap'
import { Context } from '../index'
import {observer} from 'mobx-react-lite'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <Row className='d-flex' style={{display: 'flex'}}>
        {device.brands.map(brand => (
            <Card 
            style={{cursor: 'pointer', width: 100}}
             key={brand.id} 
             className='p-3'
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            onClick={() => device.setSelectedBrand(brand)} 
             >
                 
                {brand.name}
            </Card> 
        ))}
    </Row>
  )
})

export default BrandBar