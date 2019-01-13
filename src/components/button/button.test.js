import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './button'

describe('Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toBeDefined()
  })
})
