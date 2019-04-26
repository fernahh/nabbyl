import React from 'react'
import { shallow, render } from 'enzyme'
import ENV from '@environment'
import { SpotifyConnectButton } from './index'

describe('Spotify Connect Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<SpotifyConnectButton />)
    expect(wrapper.prop('className')).toEqual('spotify_connect_button')
  })

  it('indicate the connection with Spotify', () => {
    const wrapper = render(<SpotifyConnectButton />)
    expect(wrapper.text()).toEqual('Connect with Spotify')
  })

  it('redirect to auth URL', () => {
    const wrapper = shallow(<SpotifyConnectButton />)
    window.location.replace = jest.fn()
    wrapper.find('Button').simulate('click')
    expect(window.location.replace).toBeCalledWith(`${ENV.API_BASE_URL}/auth`)
  })
})
