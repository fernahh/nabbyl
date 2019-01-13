import React from 'react'
import { render } from 'react-dom'
import './application.scss'
import { Button } from './components/button'

const Index = () => <Button />

render(<Index />, document.getElementById('application'))
