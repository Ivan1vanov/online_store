import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DeviceItem = ({device}) => {
  return (
    <Col>
        <Card style={{width: '150px'}}>
            <Link to={`/device/${device.id}`}>
            <Image style={{width: '150px', height: '150px'}} src={'http://localhost:5000/' + device.image} />
            </Link>
            <div className='d-flex justify-content-between mt-2'>
                <div>
                    <strong> {device.name}</strong>
                </div>
                <div>
                    {device.rating}

                </div>
            </div>
            <div>
                ${device.price}
            </div>
        </Card>
    </Col>
  )
}

export default DeviceItem