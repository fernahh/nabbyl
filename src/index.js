import React from 'react'
import { createRoot } from 'react-dom/client'
import Application from '@src/application'

const root = createRoot(document.getElementById('application'))
root.render(<Application />)
