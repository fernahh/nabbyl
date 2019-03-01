import React from 'react'
import PropTypes from 'prop-types'
import { ColorPaletteButton } from '@src/components/color-palette-button'
import './color-palette-list.scss'

export const ColorPaletteList = props => (
  <ul className="color_palette_list">
    {props.colors.map(color => (
      <li key={color} className="color_palette_list__item">
        <ColorPaletteButton color={color} />
      </li>
    ))}
  </ul>
)

ColorPaletteList.propTypes = {
  colors: PropTypes.array.isRequired
}