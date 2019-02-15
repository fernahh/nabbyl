import { buildHeaders } from './index'

describe('Build headers', () => {
  it('return a object with access token', () => {
    expect(buildHeaders('foobar')).toEqual({
      headers: {
        'Authorization': 'Bearer foobar'
      }
    })
  })
})