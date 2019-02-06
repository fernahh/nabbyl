import React from 'react'
import ENV from '@environment'
import { Button } from '@src/components/button'
import { get } from '../../helpers/get'

export const ConnectButton = () => {
  function connect () {
    get(`${ENV.API_BASE_URL}/auth`)
  }

  return (
    <div className="connect_button">
      <Button onClick={connect}>Connect with Spotify</Button>
    </div>
  )
}
