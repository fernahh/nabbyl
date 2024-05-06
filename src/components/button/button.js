import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

export const Button = props => {
  return <button {...props} className="button" type={props.type || 'button'}></button>
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
}
