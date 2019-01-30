import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from './index'

describe('Logo Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper).toBeDefined()
  })
})
