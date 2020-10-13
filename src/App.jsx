
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
    <Container>
      <Header as='h1'></Header>
    </Container>
    );
  }
}

export default App;

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