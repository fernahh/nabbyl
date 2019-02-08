import React from 'react'
import { shallow } from 'enzyme'
import { parseQueryString } from '../../helpers/parse-query-string'
import { Dashboard } from './index'

jest.mock('../../helpers/parse-query-string')

describe('Dashboard Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find('.dashboard')).toBeTruthy()
  })

  it('define access token as a empty string', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.state('accessToken')).toEqual('')
  })

  it('define refresh token as a empty string', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.state('refreshToken')).toEqual('')
  })

  it('define access token with value from query string url', () => {
    parseQueryString.mockReturnValue({
      access_token: 'foo123',
      refresh_token: 'bar123'
    })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.state('accessToken')).toEqual('foo123')
  })

  it('define refresh token with value from query string url', () => {
    parseQueryString.mockReturnValue({
      access_token: 'foo123',
      refresh_token: 'bar123'
    })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.state('refreshToken')).toEqual('bar123')
  })

  it('remove params from url', () => {
    history.pushState = jest.fn()
    parseQueryString.mockReturnValue({
      access_token: 'foo123',
      refresh_token: 'bar123'
    })
    shallow(<Dashboard />)
    expect(history.pushState).toBeCalledWith('', '/', location.pathname)
  })
})