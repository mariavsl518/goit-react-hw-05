import React from 'react'
import Navigation from '../Navigation/Navigation'
import css from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={css.navigation}>
        <Navigation/>
        {children}
    </div>
    
  )
}

export default Layout