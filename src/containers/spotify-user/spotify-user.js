import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ENV from '@environment'
import { User } from '@src/components/user'
import { get } from '@src/helpers/get'

export class SpotifyUser extends Component {
  static propTypes = {
    accessToken: PropTypes.string.isRequired
  }

  state = {
    name: '',
    image: ''
  }

  componentDidMount() {
    get(`${ENV.API_BASE_URL}/me`, buildHeaders(this.props.accessToken))
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