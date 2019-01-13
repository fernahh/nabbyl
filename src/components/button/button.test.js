import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './index'

describe('Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toBeDefined()
  })
})
