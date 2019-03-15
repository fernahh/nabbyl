import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import './fade-transition.scss'

export const FadeTransition = props => (
  <CSSTransition timeout={500} classNames={{
    enter: 'fade_transition__enter',
    enterActive: 'fade_transition__enter--active',
    exit: 'fade_transition__exit',
    exitActive: 'fade_transition__exit--active'
  }} {...props}>
    { props.children }
  </CSSTransition>
)

FadeTransition.propTypes = {
  children: PropTypes.element.isRequired
}