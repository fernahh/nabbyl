import React, { Component } from 'react'
import { mount } from 'enzyme'
import { TokenContext } from './index'

describe('Token Context', () => {
  class User extends Component {
    static contextType = TokenContext  
    render() {
      return (<p>User token: {this.context.accessToken}</p>)
    }
  }

  it('provide a token', () => {
    const wrapper = mount(
      <TokenContext.Provider value={{ accessToken: 'abcd123' }}>
        <User />
      </TokenContext.Provider>
    )
    expect(wrapper.find('p').text()).toEqual('User token: abcd123')
  })
})