import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './index'

describe('Header Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.prop('className')).toEqual('header')
  })
})
