import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux'
describe('<App />', () => {
  let store, subject
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore({
      greeting: 'Hello World from Redux',
      proposed_greeting: ''
    })
    jest.spyOn(redux, 'useSelector').mockReturnValue(store.getState())
    jest.spyOn(redux, 'useDispatch').mockReturnValue(store.dispatch)
    subject = mount(<App />)
  })
  it('displays the initial greeting set by redux state', () => {
    expect(subject.find('h1').text())
      .toContain('Hello World from Redux')
  })

  it('uses <Header as="h1"/>', () => {
    expect(subject.find('Header').prop('as'))
      .toEqual('h1')
  });
})