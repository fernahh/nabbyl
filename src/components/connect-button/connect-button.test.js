import React from 'react'
import { shallow, render } from 'enzyme'
import ENV from '@environment'
import { ConnectButton } from './index'

describe('Connect Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ConnectButton />)
    expect(wrapper.prop('className')).toEqual('connect_button')
  })

  it('indicate the connection with Spotify', () => {
    const wrapper = render(<ConnectButton />)
    expect(wrapper.text()).toEqual('Connect with Spotify')
  })

  it('redirect to auth URL', () => {
    const wrapper = shallow(<ConnectButton />)
    window.location.replace = jest.fn()
    wrapper.find('Button').simulate('click')
    expect(window.location.replace).toBeCalledWith(`${ENV.API_BASE_URL}/auth`)
  })
})
