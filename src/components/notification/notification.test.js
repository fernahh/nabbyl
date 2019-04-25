import React from 'react'
import { shallow } from 'enzyme'
import { Notification } from './index'

describe('Notification Component', () => {
  it('render with appropriate css classes', () => {
    const wrapper = shallow(<Notification />)
    expect(wrapper.prop('className')).toEqual('notification notification--error')
  })
})