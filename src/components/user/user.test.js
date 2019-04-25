import React from 'react'
import { shallow } from 'enzyme'
import { Notification } from '@src/components/notification'
import { User } from './index'

describe('User Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<User name="Foobar" />)
    expect(wrapper.exists('.user')).toEqual(true)
  })

  it('render a notification component', () => {
    const wrapper = shallow(<User name="Foobar" hasError={true} />)
    expect(wrapper.find(Notification).length).toBeTruthy()
  })
})
