import React from 'react'
import PropTypes from 'prop-types'
import './user.scss'

export const User = (props) => (
  <div className="user">
    <div className="user__image">
      <img src={props.image} alt={props.name} />
    </div>
  </div>
)

User.propTypes = {  
  image: PropTypes.string,
  name: PropTypes.string.isRequired
}