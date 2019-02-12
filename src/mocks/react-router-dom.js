import React from 'react'
import PropTypes from 'prop-types'
const ReactRouterDOM = require('react-router-dom')

const BrowserMock = ({ children }) => (
  <div>{children}</div>
)

BrowserMock.propTypes = {
  children: PropTypes.node
}

ReactRouterDOM.BrowserRouter = BrowserMock

module.exports = ReactRouterDOM