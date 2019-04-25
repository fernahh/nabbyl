import React from 'react'
import { shallow } from 'enzyme'
import ENV from '@environment'
import { SpotifyUser } from './index'
import { get } from '@src/helpers/get'
import { promiseMock } from '@src/mocks/promise-mock'

jest.mock('@src/helpers/get')

describe('Spotify User', () => {
  const context = { accessToken: 'foobar' }
  const responseMock = {
    data: {
      display_name: 'John',
      images: [{ url: 'spotify.com/john.png' }]
    }
  }

  const stubGet = (type, response, shouldAbortRequest) =>
    get.mockReturnValue(promiseMock(type, response, shouldAbortRequest))

  it('render with appropriate css class', () => {
    stubGet('success', responseMock)
    const wrapper = shallow(<SpotifyUser />)
    expect(wrapper.prop('className')).toEqual('spotify_user')
  })

  it('get user data', () => {
    stubGet('success', responseMock)
    shallow(<SpotifyUser />, { context })
    expect(get).toBeCalledWith(`${ENV.API_BASE_URL}/me`, {
      headers: {
        'Authorization': 'Bearer undefined' // FIXME
      }
    })
  })

  it('define user data on state', done => {
    stubGet('success', responseMock)
    const wrapper = shallow(<SpotifyUser />, { context })
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('name')).toEqual('John')
      expect(wrapper.state('image')).toEqual('spotify.com/john.png')
      done()
    })
  })

  it('indicate an error when is a unsuccessful request', () => {
    stubGet('error')
    const wrapper = shallow(<SpotifyUser />, { context })
    expect(wrapper.state('hasError')).toEqual(true)
  })
})
