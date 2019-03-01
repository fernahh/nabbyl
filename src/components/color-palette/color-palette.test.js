import React from 'react'
import { shallow } from 'enzyme'
import { ColorPaletteButton } from '@src/components/color-palette-button'
import { ColorPalette } from './index'

describe('Color Palette', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<ColorPalette colors={[]} />)
    expect(wrapper.prop('className')).toEqual('color_palette')
  })

  it('render a list of colors', () => {
    const colors = ['#000', '#fff']
    const wrapper = shallow(<ColorPalette colors={colors} />)
    expect(wrapper.find('li').at(0).key()).toEqual('#000')
    expect(wrapper.find('li').at(1).key()).toEqual('#fff')
    expect(wrapper.find(ColorPaletteButton).at(0).prop('color')).toEqual('#000')
    expect(wrapper.find(ColorPaletteButton).at(1).prop('color')).toEqual('#fff')
  })
})