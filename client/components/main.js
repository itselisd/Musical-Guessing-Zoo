import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Animals from './animals'

const Main = (props) => {
  return (
    <div>
      <h1>Musical Guessing Zoo</h1>
      <nav>
        <div>
          <a href="/home">Play the Game!</a>
          <a href="/chords">See the Chords!</a>
        </div>
      </nav>
      <hr />
      <div className="content">
        {Animals}
      </div>
    </div>
  )
}

export default Main;

