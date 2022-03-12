import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '..'
import {observer} from 'mobx-react-lite'

const Navbar = observer(() => {
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Ebać Putina</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
        <Link className="nav-item nav-link active" to='/'>
                 Home 
        </Link>
        {user.isAuth ? (
            <React.Fragment>
            <button onClick={logOut}>
                Logout
            </button>
            <Link className="nav-item nav-link" to='/admin'>
                <button>
            Admin panel
            </button>
            </Link>
            </React.Fragment>
        ) : (

            <Link className="nav-item nav-link" to='/auth'>
            Auth
            </Link>
        )}
    </div>
  </div>
</nav>
    </div>
  )
})

export default Navbar