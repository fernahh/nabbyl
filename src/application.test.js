import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './screens/home'
import Application from './application'

describe('Application', () => {
  it('have the home route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Application />
      </MemoryRouter>
    )
    expect(wrapper.find(Home).length).toBeTruthy()
  })
})
