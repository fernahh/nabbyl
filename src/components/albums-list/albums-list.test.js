import React from 'react'
import { shallow } from 'enzyme'
import { AlbumsList } from './index'

describe('Albums List', () => {
  it('render with appropriate css class', () => {
    const wrapper = shallow(<AlbumsList items={[]} />)
    expect(wrapper.prop('className')).toEqual('albums_list')
  })

  it('render a list of albums', () => {
    const albums = [
      { add_at: 12345, album: { id: 1, name: 'foo' } }, 
      { add_at: 6789, album: { id: 2, name: 'bar' } }, 
    ]
    const wrapper = shallow(<AlbumsList items={albums} />)
    expect(wrapper.find('li').at(0).key()).toEqual('1')
    expect(wrapper.find('li').at(1).key()).toEqual('2')
  })
})