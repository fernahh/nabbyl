import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from './index'

describe('Loader Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.prop('className')).toEqual('loader')
  })
})
