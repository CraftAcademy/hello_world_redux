import React from 'react';
import { Input, Button, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greeting}</Header>
        <Input
          placeholder='New greeting...'
          onBlur={(event) => props.dispatch({ type: 'PROPOSE_GREETING', greeting: event.target.value })}
        />
        <Button
          primary
          onClick={() => props.dispatch({ type: 'CHANGE_GREETING' })}
        >
          Change greeting
        </Button>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);