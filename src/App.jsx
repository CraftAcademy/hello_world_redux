
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <Container>
        <Header as='h1'>{this.props.greeting}</Header>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    greeting: state.greeting
  }
}

export default connect(mapStateToProps)(App);

// import React, { useState } from 'react';
// import { Container, Header } from 'semantic-ui-react'

// const App = () => {
//   let [greeting, setGreeting] = useState('Hello world from a hooked state')
//   return (
//     <Container>
//       <Header as='h1'>{greeting}</Header>
//     </Container>
//   );
// }

// export default App;