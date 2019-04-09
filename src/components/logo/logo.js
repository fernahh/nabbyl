import React from 'react'
import PropTypes from 'prop-types'
import './logo.scss'

export const Logo = props => {
  const size = `${props.size}px`
  const borderWidth = `${(props.size * 9 / 100)}px`

  return (
    <div
      className="logo"
      style={{
        height: size
      }}>
      <div
        className="logo__cover"
        style={{
          height: size,
          width: size,
          borderWidth
        }} />
      <span
        className="logo__word"
        style={{
          fontSize: `${(props.size / 2)}px`,
          lineHeight: size
        }}>
        nabbyl
      </span>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.number
}

Logo.defaultProps = {
  size: 90
}
