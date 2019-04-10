import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import { parseQueryString } from '../../helpers/parse-query-string'
import { Dashboard } from './index'
import { SpotifyAlbumsList } from '@src/containers/spotify-albums-list'

jest.mock('../../helpers/parse-query-string')

describe('Dashboard Component', () => {
  it('render with appropriate css class', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find('.dashboard')).toBeTruthy()
  })

  it('redirect to home when access token is not present', () => {
    parseQueryString.mockReturnValue({})
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(Redirect).length).toBeTruthy()
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

  it('render spotify albums list component', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(SpotifyAlbumsList).length).toBeTruthy()
  })

  it('not render spotify albums list component when access token is empty', () => {
    parseQueryString.mockReturnValue({ access_token: '' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find(SpotifyAlbumsList).length).toBeFalsy()
  })
})