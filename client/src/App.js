import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomePage from './components/HomePage'
import Form from './components/Form'
import FinishPage from './components/FinishPage'

const App = () => {
  return(
    <div className="container">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/form' component={Form}/>
        <Route path='/finish' component={FinishPage}/>
      </Switch>
    </div>
  )
}

export default App