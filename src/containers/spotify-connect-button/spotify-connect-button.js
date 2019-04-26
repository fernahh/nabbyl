import React from 'react'
import ENV from '@environment'
import { Button } from '@src/components/button'
import './spotify-connect-button.scss'

export const SpotifyConnectButton = () => {
  function connect() {
    window.location.replace(`${ENV.API_BASE_URL}/auth`)
  }

  return (
    <div className="spotify_connect_button">
      <Button onClick={connect}>Connect with Spotify</Button>
    </div>
  )
}
