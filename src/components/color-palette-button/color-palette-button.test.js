import React from 'react'
import { shallow, mount } from 'enzyme'
import Clipboard from 'react-clipboard.js'
import { ColorPaletteButton } from './index'

describe('Color Palette Button', () => {
  it('render a clipboard with appropriate css class', () => {
    const wrapper = shallow(<ColorPaletteButton color="#fff" />)
    expect(wrapper.find(Clipboard).prop('className')).toEqual('color_palette_button')
  })

  it('render the color prop as background color', () => {
    const wrapper = shallow(<ColorPaletteButton color="#fff" />)
    expect(wrapper.prop('style')).toEqual({ backgroundColor: '#fff' })
  })

  it('render the color prop on clipboard text', () => {
    const wrapper = shallow(<ColorPaletteButton color="#fff" />)
    expect(wrapper.prop('data-clipboard-text')).toEqual('#fff')
  })

  it('render tooltip on up position', () => {
    const wrapper = shallow(<ColorPaletteButton color="#fff" />)
    expect(wrapper.prop('data-balloon-pos')).toEqual('up')
  })

  it('render the color prop on tooltip', () => {
    const wrapper = shallow(<ColorPaletteButton color="#fff" />)
    expect(wrapper.prop('data-balloon')).toEqual('#fff')
  })

  it('give a success callback on the copy', (done) => {
    const wrapper = mount(<ColorPaletteButton color="#fff" />)
    const instance = wrapper.instance()
    instance.onCopySuccess()
    process.nextTick(() => {
      expect(wrapper.state('tooltipText')).toEqual('Copied!')
      done()
    })
  })

  it('render the color prop on tooltip after one second after copy success', (done) => {
    jest.useFakeTimers()
    const wrapper = mount(<ColorPaletteButton color="#fff" />)
    const instance = wrapper.instance()
    instance.onCopySuccess()
    process.nextTick(() => {
      jest.runAllTimers()
      expect(wrapper.state('tooltipText')).toEqual('#fff')
      done()
    })
  })
})