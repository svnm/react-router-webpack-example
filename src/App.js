import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Teams from './components/Teams'

const App = () => (
  <AppContainer>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
      </div>
    </Router>
  </AppContainer>
)

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-size: 20px;
  padding: 20px 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`

export default App
