import React, { Component } from 'react'
import { Button } from '../button'
import ENV from '@environment'
import { get } from '../../helpers/get'

export class ConnectButton extends Component {
  connect = () => {
    get(`${ENV.API_BASE_URL}/auth`)
  }

  render() {
    return (
      <div className="connect_button">
        <Button onClick={this.connect}>Connect with Spotify</Button>
      </div>
    )
  }
}
