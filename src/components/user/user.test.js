import React from 'react'
import { shallow } from 'enzyme'
import { User } from './index'

describe('User Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<User name="Foobar" />)
    expect(wrapper.find('.user')).toBeTruthy()
  })
})
