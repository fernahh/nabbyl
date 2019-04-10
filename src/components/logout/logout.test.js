import React from 'react'
import { MemoryRouter, Router } from 'react-router-dom'
import { mount } from 'enzyme'
import { historyMock } from '@src/mocks/history-mock'
import { Logout } from './index'


describe('Logout Component', () => {
  it('render with appropriate css class', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Logout />
      </MemoryRouter>
    )
    const logout = wrapper.find('button')
    expect(logout.prop('className')).toEqual('logout')
  })

  it('go to home on logout', () => {
    const wrapper = mount(
      <Router history={historyMock}>
        <Logout />
      </Router>
    )
    wrapper.find('button').simulate('click')
    expect(historyMock.push).toBeCalledWith('/')
  })
})
