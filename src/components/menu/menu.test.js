import React from 'react'
import { shallow } from 'enzyme'
import { Menu } from './index'

describe('Menu Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.prop('className')).toEqual('menu')
  })
})
