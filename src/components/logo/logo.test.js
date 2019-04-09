import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from './index'

describe('Logo Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper.prop('className')).toEqual('logo')
  })

  it('set 90px as default size', () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper.prop('style').height).toEqual('90px')
  })

  it('set a custom size', () => {
    const wrapper = shallow(<Logo size={40} />)
    expect(wrapper.prop('style').height).toEqual('40px')
  })

  it('set logo cover height', () => {
    const wrapper = shallow(<Logo size={100} />)
    const cover = wrapper.find('.logo__cover')
    expect(cover.prop('style').height).toEqual('100px')
  })

  it('set logo cover width', () => {
    const wrapper = shallow(<Logo size={100} />)
    const cover = wrapper.find('.logo__cover')
    expect(cover.prop('style').width).toEqual('100px')
  })

  it('set logo cover border width with 90 percent', () => {
    const wrapper = shallow(<Logo size={100} />)
    const cover = wrapper.find('.logo__cover')
    expect(cover.prop('style').borderWidth).toEqual('9px')
  })

  it('set logo word font size', () => {
    const wrapper = shallow(<Logo size={100} />)
    const word = wrapper.find('.logo__word')
    expect(word.prop('style').fontSize).toEqual('50px')
  })

  it('set logo word line height', () => {
    const wrapper = shallow(<Logo size={100} />)
    const word = wrapper.find('.logo__word')
    expect(word.prop('style').lineHeight).toEqual('100px')
  })
})
