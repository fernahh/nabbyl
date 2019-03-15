import React from 'react'
import { shallow } from 'enzyme'
import { CSSTransition } from 'react-transition-group'
import { FadeTransition } from './index'

describe('Fade Transition Component', () => {
  it('render a CSS Transition with appropriate css classes', () => {
    const wrapper = shallow(
      <FadeTransition>
        <div>Some content</div>
      </FadeTransition>
    )
    expect(wrapper.find(CSSTransition).prop('classNames')).toEqual({
      enter: 'fade_transition__enter',
      enterActive: 'fade_transition__enter--active',
      exit: 'fade_transition__exit',
      exitActive: 'fade_transition__exit--active'
    })
  })

  it('set 500 miliseconds as timeout transition', () => {
    const wrapper = shallow(
      <FadeTransition>
        <div>Some content</div>
      </FadeTransition>
    )
    expect(wrapper.find(CSSTransition).prop('timeout')).toEqual(500)
  })
})