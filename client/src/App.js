import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import DevicePage from './pages/DevicePage';
import AuthPage from './pages/AuthPage';
import BasketPage from './pages/BasketPage';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';
import { check } from './http/userAPI';
import {observer} from 'mobx-react-lite'

const App = observer(() => {

  const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/device/:id' element={<DevicePage/>}/>
              <Route path='/auth' element={<AuthPage/>}/>
              <Route path='/admin' element={<AdminPage/>}/>
              {user.isAuth && (
               <Route path='/basket/:id' element={<BasketPage/>}/>
              )}

            
            </Routes>
        </BrowserRouter>
    </div>
  );
})

export default App;
