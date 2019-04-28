import React from 'react'
import { shallow } from 'enzyme'
import { parseQueryString } from '../../helpers/parse-query-string'
import { Dashboard } from './index'

jest.mock('../../helpers/parse-query-string')

describe('Dashboard Component', () => {
  it('render with appropriate css class', () => {
    parseQueryString.mockReturnValue({ access_token: 'foo123' })
    const wrapper = shallow(<Dashboard />)
    expect(wrapper.find('.dashboard')).toBeTruthy()
  })
})