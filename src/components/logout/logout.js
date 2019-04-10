import React from 'react'
import { withRouter } from 'react-router-dom'
import './logout.scss'

export const Logout = withRouter(({ history }) => {
  function handleLogout() {
    history.push('/')
  }

  return (
    <button 
      className="logout" 
      data-balloon="Logout"
      data-balloon-pos="down"
      onClick={handleLogout}>
    </button>
  )
})