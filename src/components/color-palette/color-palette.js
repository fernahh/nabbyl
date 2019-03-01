import React from 'react'
import PropTypes from 'prop-types'
import { ColorPaletteButton } from '@src/components/color-palette-button'
import './color-palette.scss'

export const ColorPalette = props => (
  <ul className="color_palette">
    {props.colors.map(color => (
      <li key={color} className="color_palette__item">
        <ColorPaletteButton color={color} />
      </li>
    ))}
  </ul>
)

ColorPalette.propTypes = {
  colors: PropTypes.array.isRequired
}