import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

const DevicePage = () => {

    // const device = {id: 1, name: 'Phone0', price: 1200, rating: 5, image: 'https://media.4rgos.it/s/Argos/9520165_R_SET?$Main768$&w=620&h=620'}
    
    // const desc = [
    //     {id: 1, title: 'Phone', description: '12AiO'},
    //     {id: 2, title: 'Memory', description: '4 Gb'},
    //     {id: 3, title: 'Petium', description: '6'},
    //     {id: 4, title: 'Camera', description: 'Yeas'},
    // ]

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
  
    return (
        <Container>
            <div className='d-flex align-items-center justify-center'>
            <Col md='4'>
                <Image width={300} height={300} src={'http://localhost:5000/' + device.image} />
                <h2>{device.name}</h2>
                <div>
                  Rating:  {device.rating}
                </div>
             
            </Col>

            <Col md='4'>
                 
                  
            <h3>${device.price}</h3>
                <Button>
                    Add to cart
                </Button>
            </Col>
            
            </div>
            {device.info.map((dec, index) => (
                    <div key={dec.id} style={{backgroundColor: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px'}}>
                        {dec.title}: {dec.description}
                    </div>
                ))}
        </Container>
  )
}

export default DevicePage