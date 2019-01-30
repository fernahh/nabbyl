import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './index'

describe('Button Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toBeDefined()
  })

  it('execute provided function on click', () => {
    const onButtonClickAction = jest.fn()
    const wrapper = shallow(<Button onClick={onButtonClickAction} />)
    wrapper.find('button').simulate('click')
    expect(onButtonClickAction).toBeCalled()
  })

  it('render button with submit type', () => {
    const wrapper = shallow(<Button type="submit" />)
    expect(wrapper.find('button').props().type).toEqual('submit')
  })

  it('render button with reset type', () => {
    const wrapper = shallow(<Button type="reset" />)
    expect(wrapper.find('button').props().type).toEqual('reset')
  })

  it('render button with button type', () => {
    const wrapper = shallow(<Button type="button" />)
    expect(wrapper.find('button').props().type).toEqual('button')
  })
})
