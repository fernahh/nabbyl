import React, { Component } from 'react'
import { TokenContext } from '@src/components/token-context'
import ENV from '@environment'
import { AlbumsList } from '@src/components/albums-list'
import { get } from '@src/helpers/get'
import { buildHeaders } from '@src/helpers/build-headers'

export class SpotifyAlbumsList extends Component {
  static contextType = TokenContext

  state = {
    isRequesting: false,
    items: [],
    offset: 0
  }

  componentDidMount() {
    this.getAlbums()
    window.addEventListener('scroll', this.getAlbumsOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getAlbumsOnScroll)
  }

  getAlbumsOnScroll = () => {
    if (scrolledEnough() && !this.state.isRequesting)
      this.getAlbums()
  }

  getAlbums = () => {
    this.setState({ 
      isRequesting: true 
    })

    get(
      `${ENV.API_BASE_URL}/albums?offset=${this.state.offset}`, 
      buildHeaders(this.context.accessToken)
    ).then(response => {
      this.setState({ 
        isRequesting: false,
        items: this.state.items.concat(response.data),
        offset: response.headers.offset
      })
    })
  }

  render() {
    return (
      <div className="spotify_albums_list">
        { this.state.items && 
          <AlbumsList items={this.state.items} 
            isRequesting={this.state.isRequesting} /> }
      </div>
    )
  }
}

function scrolledEnough() {
  const scrolledSize = window.innerHeight + window.scrollY
  const seventyPerCentOfDocument = (document.body.offsetHeight * 70 / 100)
  return scrolledSize >= seventyPerCentOfDocument
}