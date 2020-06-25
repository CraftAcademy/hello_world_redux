import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import configureStore from 'redux-mock-store'

import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

describe('<App />', () => {
  const mockDispatch = jest.fn()
  const mockStore = configureStore([])

  const store = mockStore({
    greeting: 'Hello World from Redux',
    proposed_greeting: '',
  })

  useSelector.mockReturnValue(store.getState())
  useDispatch.mockImplementation(() => mockDispatch)

  const subject = mount(<App />)

  it('displays the initial greeting set by redux state', () => {
    expect(subject.find('h1').text()).toContain('Hello World from Redux')
  })

  it('uses <Header as="h1"/>', () => {
    expect(subject.find('Header').prop('as')).toEqual('h1')
  })

  it('can set PROPOSED_GREETING', () => {
    subject.find('input').simulate('blur', { target: { value: 'Hello' } })
    expect(mockDispatch).toHaveBeenCalledWith({
      greeting: 'Hello',
      type: 'PROPOSE_GREETING',
    })
  })
  it('calls CHANGE_GREETING', () => {
    subject.find('button').simulate('click')
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'CHANGE_GREETING',
    })
  })
})
