import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux'

const mockStore = configureStore([])

describe('<App />', () => {
  let store
  beforeEach(() => {
    store = mockStore({
      greeting: 'Hello World from Redux',
      proposed_greeting: ''
    })
  })
  it('should display the initial greeting set by redux state', () => {
    const subject = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(subject.find('h1').text()).toEqual('Hello World from Redux')
  })
})