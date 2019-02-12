import React from 'react'
import { shallow } from 'enzyme'
import { parseQueryString } from '../../helpers/parse-query-string'
import { Dashboard } from './index'
import { SpotifyUser } from '@src/containers/spotify-user'

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

  it('define access token with value from query string url', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.state('accessToken')).toEqual('foo123')
  })

  it('remove params from url', () => {
    history.pushState = jest.fn()
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    shallow(<Dashboard />)
    expect(history.pushState).toBeCalledWith('', '/', location.pathname)
  })

  it('render spotify user component', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(SpotifyUser).length).toBeTruthy()
  })

  it('not render spotify user component when access token is empty', () => {
    parseQueryString.mockReturnValue({ access_token: '' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(SpotifyUser).length).toBeFalsy()
  })
})