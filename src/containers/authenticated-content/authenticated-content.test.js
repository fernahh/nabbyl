import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import { parseQueryString } from '../../helpers/parse-query-string'
import { AuthenticatedContent } from './index'

jest.mock('../../helpers/parse-query-string')

describe('Authenticated Content', () => {
  it('redirect to home when access token is not present', () => {
    parseQueryString.mockReturnValue({})
    const wrapper = shallow(<AuthenticatedContent />)
    expect(wrapper.find(Redirect).length).toBeTruthy()
  })

  it('define access token with value from query string url', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<AuthenticatedContent />)
    expect(wrapper.state('accessToken')).toEqual('foo123')
  })

  it('remove params from url', () => {
    history.pushState = jest.fn()
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    shallow(<AuthenticatedContent />)
    expect(history.pushState).toBeCalledWith('', '/', location.pathname)
  })
})