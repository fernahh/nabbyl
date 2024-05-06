import React from 'react'
import PropTypes from 'prop-types'
import './logo.scss'

export const Logo = props => {
  const logoSize = props.size || 90
  const size = `${logoSize || 90}px`
  const borderWidth = `${(logoSize * 9 / 100)}px`

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
          fontSize: `${(logoSize / 2)}px`,
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
