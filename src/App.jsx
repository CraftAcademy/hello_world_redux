import React from 'react';
import { Input, Button, Container, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  return (
    <Container>
      <Header as='h1'>{state.greeting}</Header>
      <Input
        placeholder='New greeting...'
        onBlur={(event) => dispatch({ type: 'PROPOSE_GREETING', greeting: event.target.value })}
      />
      <Button
        primary
        onClick={() => dispatch({ type: 'CHANGE_GREETING' })}
      >
        Change greeting
        </Button>
    </Container>
  );
}



export default App;