import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux'
describe('<App />', () => {
  let store, subject, dispatch
  const mockStore = configureStore([])

  beforeEach(() => {
    store = mockStore({
      greeting: 'Hello World from Redux',
      proposed_greeting: ''
    })

    jest.spyOn(redux, 'useSelector').mockReturnValue(store.getState())
    dispatch = jest.spyOn(redux, 'useDispatch').mockReturnValue(store.dispatch)
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

  it('can set PROPOSED_GREETING', () => {

    const input = subject.find('Input');
    const button = subject.find('button')

    subject.find('input').simulate('change', { target: { value: 'Hello' } })
    subject.find('input').simulate('blur')
    // console.log(dispatch.toString())
    let mockDispatch = jest.fn(dispatch)
    expect(mockDispatch).toHaveBeenCalledWith(
      { type: 'PROPOSE_GREETING', greeting: 'Hello' }
    );

  });
})