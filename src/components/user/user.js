import React from 'react'
import PropTypes from 'prop-types'
import './user.scss'

export const User = (props) => (
  <div className="user">
    <img src={props.image} alt={props.name} className="user__image" />
    <span className="user__name">{props.name}</span> 
  </div>
)

User.propTypes = {  
  image: PropTypes.string,
  name: PropTypes.string.isRequired
}