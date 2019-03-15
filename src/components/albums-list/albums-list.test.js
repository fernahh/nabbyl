import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from '@src/components/loader'
import { Album } from '@src/components/album'
import { AlbumsList } from './index'

describe('Albums List', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<AlbumsList items={[]} isRequesting={false} />)
    expect(wrapper.prop('className')).toEqual('albums_list')
  })

  it('render a list of albums', () => {
    const items = [
      { add_at: 12345, album: { id: 1, name: 'foo' } }, 
      { add_at: 6789, album: { id: 2, name: 'bar' } }, 
    ]
    const wrapper = shallow(<AlbumsList items={items} isRequesting={false} />)
    expect(wrapper.find(Album).at(0).prop('album')).toEqual(items[0].album)
    expect(wrapper.find(Album).at(1).prop('album')).toEqual(items[1].album)
  })

  it('render the loader', () => {
    const wrapper = shallow(<AlbumsList items={[]} isRequesting={true} />)
    expect(wrapper.find(Loader).length).toBeTruthy()
  })
})