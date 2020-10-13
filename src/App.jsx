
// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { Container, Header } from 'semantic-ui-react'

// class App extends Component {

//   render() {
//     return (
//       <Container>
//         <Header as='h1'>{this.props.greeting}</Header>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     greeting: state.greeting
//   }
// }

// export default connect(mapStateToProps)(App);

import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

const App = () => {
  // let [greeting, setGreeting] = useState('Hello world from a hooked state')
  let state = useSelector(state => state)
  return (
    <Container>
      <Header as='h1'>{state.greeting}</Header>
    </Container>
  );
}

export default App;