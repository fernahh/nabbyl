import React from 'react'
import { shallow } from 'enzyme'
import { Album } from './index'

describe('Album', () => {
  const getAlbumMock = () => ({
    name: 'Nevermind',
    images: [
      { url: 'spotify.com/image.jpeg' }
    ]
  })

  it('render with appropriate css class', () => {
    const wrapper = shallow(<Album album={getAlbumMock()} />)
    expect(wrapper.prop('className')).toEqual('album')
  })

  it('render the album cover', () => {
    const wrapper = shallow(<Album album={getAlbumMock()} />)
    const image = wrapper.find('img')
    expect(image.prop('src')).toEqual('spotify.com/image.jpeg')
    expect(image.prop('alt')).toEqual('Cover of the album Nevermind')
  })
})
