import React from 'react';
import {Header, Hero, About, Technologies, MyProjects, Footer} from './components';
import { Container } from './container';

const App = () => (
  <Container>
    <Header />
    <Hero/>
    <About/>
    <Technologies/>
    <MyProjects/>
    <Footer/>
  </Container>
);

export default App;
