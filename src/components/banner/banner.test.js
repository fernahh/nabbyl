import React from 'react'
import { shallow } from 'enzyme'
import { Banner } from './index'

describe('Banner Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Banner />)
    expect(wrapper).toBeDefined()
  })
})
