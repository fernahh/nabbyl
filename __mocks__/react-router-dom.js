import React from 'react'
const ReactRouterDOM = require('react-router-dom')

ReactRouterDOM.BrowserRouter = ({ children }) => (
  <div>{children}</div>
)

module.exports = ReactRouterDOM