import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import BrandModal from '../components/modals/BrandModal'
import CreateDevice from '../components/modals/DeviceModal'
import TypeModal from '../components/modals/TypeModal'

const AdminPage = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [typeVisible, setTypeisible] = useState(false) 

  return (
    <div>
        <Button 
        variant='outline-dark'
        style={{width: '80%', margin: '10px 0'}}
        onClick={() => setTypeisible(true)}
        >
            Add type
        </Button>
        <br/>
        <Button
        variant='outline-dark'
        style={{width: '80%', margin: '10px 0'}}
        onClick={() => setBrandVisible(true)}
        >
            Add brand
        </Button>
        <br/>
        <Button
        variant='outline-dark'
        style={{width: '80%', margin: '10px 0'}}
        onClick={() => setDeviceVisible(true)}
        >
            Add device
        </Button>
        <TypeModal show={typeVisible} onHide={() => setTypeisible(false)}/>
        <BrandModal show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    </div>
  )
}

export default AdminPage