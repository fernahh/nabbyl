import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ENV from '@environment'
import { AlbumsList } from '@src/components/albums-list'
import { get } from '@src/helpers/get'
import { buildHeaders } from '@src/helpers/build-headers'

export class SpotifyAlbumsList extends Component {
  static propTypes = {
    accessToken: PropTypes.string.isRequired
  }

  state = {
    items: []
  }

  componentDidMount() {
    get(`${ENV.API_BASE_URL}/albums`, buildHeaders(this.props.accessToken))
      .then(response => {
        this.setState({ items: response.data })
      })
  }

  render() {
    return (
      <div className="spotify_albums_list">
        { this.state.items && <AlbumsList items={this.state.items} /> }
      </div>
    )
  }
}
