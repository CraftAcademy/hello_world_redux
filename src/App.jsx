import React, { useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentPostion } from './modules/location'


const App = () => {
  let greeting = useSelector(state => state.greeting)
  let country = useSelector(state => state.location.country)
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentPostion(dispatch)
    debugger
  }, [])

  return (
    <Container>
      <p data-cy="current-location" >You are in {country}!</p>
      <Header as='h1'>{greeting}</Header>
    </Container>
  );
}

export default App;