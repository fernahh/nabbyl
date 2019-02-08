import queryString from 'query-string'
import { parseQueryString } from './index'

jest.mock('query-string')

describe('Parse Query String', () => {
  it('call parse method from query-string library', () => {
    const url = 'http://api.com/dog?test'
    parseQueryString(url)
    expect(queryString.parse).toBeCalledWith(url)
  })
})
