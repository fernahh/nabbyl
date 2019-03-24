import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { parseQueryString } from './helpers/parse-query-string'
import { Home } from '@src/screens/home'
import { Dashboard } from '@src/screens/dashboard'
import Application from './application'

jest.mock('./helpers/parse-query-string')

describe('Application', () => {
  it('have the home route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Application />
      </MemoryRouter>
    )
    expect(wrapper.find(Home).length).toBeTruthy()
  })

  it('have the dashboard route', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Application />
      </MemoryRouter>
    ) 
    expect(wrapper.find(Dashboard).length).toBeTruthy()
  })
})
