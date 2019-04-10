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
    ],
    headers: {
      offset: 10
    }
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
  const context = { accessToken: 'foobar' }

  it('render with appropriate css class', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    wrapper.update()
    expect(wrapper.prop('className')).toEqual('spotify_albums_list')
  })

  it('get albums data', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    const { offset } = wrapper.state()
    expect(buildHeaders).toBeCalled() // FIXME
    expect(get).toBeCalledWith(`${ENV.API_BASE_URL}/albums?offset=${offset}`, {
      headers: {
        'Authorization': 'Bearer foobar'
      }
    })
  })

  it('indicate that a request is running', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    expect(wrapper.state('isRequesting')).toEqual(true)
  })

  it('define albums on state', done => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('items')).toEqual([
        { id: 1 },
        { id: 2 }
      ])
      done()
    })
  })

  it('indicate that a request is completed', done => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('isRequesting')).toEqual(false)
      done()
    })
  })

  it('define the offset pagination with header value', done => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.state('offset')).toEqual(10)
      done()
    })
  })

  it('get albums on scroll', () => {
    window.addEventListener = jest.fn()
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    const instance = wrapper.instance()
    expect(window.addEventListener).toHaveBeenCalledWith(
      'scroll', 
      instance.getAlbumsOnScroll
    )
  })

  it('remove the scroll listener on component unmount', () => {
    window.removeEventListener = jest.fn()
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    const instance = wrapper.instance()
    wrapper.unmount()
    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll', 
      instance.getAlbumsOnScroll
    )
  })

  it('do not get albums when there some request in progress', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    const instance = wrapper.instance()
    instance.getAlbums = jest.fn()
    wrapper.setState({ isRequesting: true })
    instance.getAlbumsOnScroll()
    expect(instance.getAlbums).not.toBeCalled()
  })

  it('do not get albums when scrolled less than seventy percent of the document', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    window.innerHeight = 700
    window.scrollY = 100
    Object.defineProperty(document.body, 'offsetHeight', {
      value: 200
    })
    const instance = wrapper.instance()
    instance.getAlbums = jest.fn()
    instance.getAlbumsOnScroll()
    expect(instance.getAlbums).not.toBeCalled()
  })

  it('get albums when scrolled more than seventy percent of the document', () => {
    const wrapper = shallow(<SpotifyAlbumsList />, { context })
    window.innerHeight = 1000
    window.scrollY = 1000
    Object.defineProperty(document.body, 'offsetHeight', {
      value: 200
    })
    wrapper.setState({ isRequesting: false })
    const instance = wrapper.instance()
    instance.getAlbums = jest.fn()
    instance.getAlbumsOnScroll()
    expect(instance.getAlbums).toBeCalled()
  })
})
