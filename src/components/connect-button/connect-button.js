import React from 'react'
import ENV from '@environment'
import { Button } from '@src/components/button'

export const ConnectButton = () => {
  function connect () {
    window.location.replace(`${ENV.API_BASE_URL}/auth`)
  }

  return (
    <div className="connect_button">
      <Button onClick={connect}>Connect with Spotify</Button>
    </div>
  )
}
