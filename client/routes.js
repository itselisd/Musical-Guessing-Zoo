import React, {Component} from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import {Main, Chords, Animals} from './components'

class Routes extends Component {

  render () {

    return (
      <Router>
        <Main />
      </Router>
    )
  }
}

export default Routes

