import React from 'react'
import { shallow, mount } from 'enzyme'
import ENV from '@environment'
import { SpotifyUser } from './index'
import { get } from '@src/helpers/get'

jest.mock('@src/helpers/get', () => ({
  get: jest.fn().mockImplementation(() => Promise.resolve({
    data: {
      display_name: 'John',
      images: [{ url: 'spotify.com/john.png' }]
    }
  }))
}))

describe('Spotify User', () => {
  const context = { accessToken: 'foobar' }

  it('render with appropriate css class', () => {
    const wrapper = shallow(<SpotifyUser />)
    expect(wrapper.prop('className')).toEqual('spotify_user')
  })

  it('get user data', () => {
    shallow(<SpotifyUser />, { context })
    expect(get).toBeCalledWith(`${ENV.API_BASE_URL}/me`, {
      headers: {
        'Authorization': 'Bearer undefined' // FIXME
      }
    })
  })

  it('define user data on state', done => {
    const wrapper = shallow(<SpotifyUser />, { context })
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('name')).toEqual('John')
      expect(wrapper.state('image')).toEqual('spotify.com/john.png')
      done()
    })
  })
})
