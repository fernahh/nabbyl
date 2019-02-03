import React from 'react'
import { Logo } from '@src/components/logo'
import { Banner } from '@src/components/banner'
import { ConnectButton } from '@src/components/connect-button'

export const Home = () => (
  <div>
    <Logo />
    <Banner />
    <ConnectButton />
  </div>
)
