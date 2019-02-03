import React from 'react'
import { shallow, render } from 'enzyme'
import ENV from '@environment'
import { get } from '../../helpers/get'
import { ConnectButton } from './index'

jest.mock('../../helpers/get')

describe('Connect Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<ConnectButton />)
    expect(wrapper.prop('className')).toEqual('connect_button')
  })

  it('indicate the connection with Spotify', () => {
    const wrapper = render(<ConnectButton />)
    expect(wrapper.text()).toEqual('Connect with Spotify')
  })

  it('get token from auth endpoint on click', () => {
    const wrapper = shallow(<ConnectButton />)
    wrapper.find('Button').simulate('click')
    expect(get).toBeCalledWith(`${ENV.API_BASE_URL}/auth`)
  })

  it('redirect to app route', () => {})
})
