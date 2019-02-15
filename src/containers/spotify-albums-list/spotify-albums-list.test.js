import React from 'react'
import { shallow } from 'enzyme'
import ENV from '@environment'
import { SpotifyAlbumsList } from './index'
import { get } from '@src/helpers/get'
import { buildHeaders } from '@src/helpers/build-headers'

jest.mock('@src/helpers/get', () => ({
  get: jest.fn().mockImplementation(() => Promise.resolve({
    data: [
      { id: 1 },
      { id: 2 }
    ]
  }))
}))
jest.mock('@src/helpers/build-headers', () => ({
  buildHeaders: jest.fn().mockImplementation(() => ({
    headers: {
      'Authorization': 'Bearer foobar'
    }
  }))
}))

describe('Spotify Albums List', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<SpotifyAlbumsList accessToken={'foobar'} />)
    expect(wrapper.prop('className')).toEqual('spotify_albums_list')
  })

  it('get albums data', () => {
    shallow(<SpotifyAlbumsList accessToken={'foobar'} />)
    expect(buildHeaders).toBeCalledWith('foobar')
    expect(get).toBeCalledWith(`${ENV.API_BASE_URL}/albums`, {
      headers: {
        'Authorization': 'Bearer foobar'
      }
    })
  })

  it('define album data on state', (done) => {
    const wrapper = shallow(<SpotifyAlbumsList accessToken={'foobar'} />)
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('items')).toEqual([
        { id: 1 },
        { id: 2 }
      ])
      done()
    })
  })
})
