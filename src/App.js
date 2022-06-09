import React from 'react';
import {Header, Hero, About, Technologies, MyProjects, Footer} from './components';
import {Layout} from './layout'

const App = () => (
  <Layout>
    <Header />
    <Hero/>
    <About/>
    <Technologies/>
    <MyProjects/>
    <Footer/>
  </Layout>
);

export default App;
