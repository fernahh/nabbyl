import axios from 'axios'
import { get } from './index'

jest.mock('axios')

describe('Get', () => {
  it('call get method from axios', () => {
    get('http://api.com/dog')
    expect(axios.get).toBeCalledWith('http://api.com/dog')
  })

  it('call get method from axios with params', () => {
    const params = { breed: 'beagle' }
    get('http://api.com/dog', params)
    expect(axios.get).toBeCalledWith('http://api.com/dog', params)
  })
})
