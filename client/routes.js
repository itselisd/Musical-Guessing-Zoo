import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from './history'
import {Main, Chords} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {

  render () {

    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/chords" component={Chords} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

export default Routes

