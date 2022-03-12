import React, { useContext, useState } from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import { Context } from '..'
import { login, registration } from '../http/userAPI'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const {user} = useContext(Context)

    const [authData, setAuthData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = authData

    const onChangeHandler = (e) => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value
        })
    }

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
  return (
    <div>
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{
            height: window.innerHeight - 54
        }}
        >   
            <Card>
                <Form className='p-3' style={{width: 600}}>
                    <h1>
                    {isLogin ? (
                            <span>
                                Login
                            </span>
                        ): (
                            <span>
                                Sign up
                            </span>
                        )}
                    </h1>
                    {isLogin ? (
                         <React.Fragment>
                         <input
                         className='form-control mt-3'
                         placeholder='email'
                         name='email'
                         value={email}
                         onChange={onChangeHandler}
                         />
                         <input
                         className='form-control mt-3'
                         placeholder='password'
                         name='password'
                         password={password}
                         onChange={onChangeHandler}
                         />
                         </React.Fragment>
                    ) : (
                        <React.Fragment>
                        <input
                         className='form-control mt-3'
                         placeholder='email'
                         name='email'
                         value={email}
                         onChange={onChangeHandler}
                        />
                        <input
                         className='form-control mt-3'
                         placeholder='password'
                         name='password'
                         password={password}
                         onChange={onChangeHandler}
                        />
                        </React.Fragment>
                    )}
                    <Button
                    variant={'outline-success'}
                    style={{width: '100%'}}
                    className='mt-3'
                    onClick={click}
                    >
                        {isLogin ? (
                            <span>
                                Login
                            </span>
                        ): (
                            <span>
                                Sign up
                            </span>
                        )}
                        
                    </Button>

                    <div className='mt-3'>
                    {isLogin ? (
                            <span>
                                Dont have an account? - <Button 
                                variant='outline-primary'
                                onClick={() => setIsLogin(!isLogin)}>Sign up</Button>
                            </span>
                        ): (
                            <span>
                                Allready have an account? - <Button 
                                variant='outline-primary'
                                onClick={() => setIsLogin(!isLogin)}>Log in</Button>
                            </span>
                        )}
                    </div>
                   
                </Form>
                {JSON.stringify(authData)}
            </Card>
        </Container>
    </div>
  )
}

export default AuthPage