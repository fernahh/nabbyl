import React from 'react'
import { shallow } from 'enzyme'
import { ColorPalette } from '@src/components/color-palette'
import { Album } from './index'

describe('Album', () => {
  const getAlbumMock = () => ({
    name: 'Nevermind',
    images: [
      { url: 'spotify.com/image.jpeg' }
    ],
    artists: [
      { name: 'Nirvana' }
    ],
    colors: ['#fff', '#000']
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

  it('render the album info', () => {
    const wrapper = shallow(<Album album={getAlbumMock()} />)
    expect(wrapper.find('.album__info__name').text()).toEqual('Nevermind')
    expect(wrapper.find('.album__info__artist').text()).toEqual('Nirvana')
    expect(wrapper.find(ColorPalette).prop('colors')).toEqual(['#fff', '#000'])
  })
})
