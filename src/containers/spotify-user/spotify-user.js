import React, { Component } from 'react'
import { TokenContext } from '@src/components/token-context'
import ENV from '@environment'
import { User } from '@src/components/user'
import { get } from '@src/helpers/get'

export class SpotifyUser extends Component {
  static contextType = TokenContext

  state = {
    name: '',
    image: ''
  }

  componentDidMount() {
    get(`${ENV.API_BASE_URL}/me`, buildHeaders(this.context.accessToken))
      .then(response => {
        this.setState({
          name: response.data.display_name,
          image: response.data.images[0].url
        })
      })
  }

  render() {
    return (
      <div className="spotify_user">
        <User name={this.state.name} image={this.state.image} />
      </div>
    )
  }
}

function buildHeaders(accessToken) {
  return {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
}