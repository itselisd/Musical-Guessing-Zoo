import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import Animals from './animals'
import Chords from './chordList'
import Selector from './chordSelect'

const Main = (props) => {
  return (
    <div>
      <h1>Musical Guessing Zoo</h1>
      <nav>
        <div>
          <a href="/chords">See the Chords!</a>
          <a href="/home">Name the Major Chord!</a>
        </div>
      </nav>
      <hr />
      <div className="content">
        <p id='welcomeTxt'>Welcome to the Musical Guessing Zoo!
        <br /> All our animals have names that start with the letter of the musical note they love the most. You will see three animals at a time and guess which chord they make with the first letters of their names.
        <br /> Watch out for sharks in our zoo though! If you see a shark next to an animal's name that means its musical note has a sharp (#).
        <br />
        A major chord is the first, third, and fifth note of a major scale.
        <br />
        Here is a list of the chords to get you started before we explore!
        <br />
        <button type="button">Click to Play!</button>
        </p>
        </div>
        <Animals />
        <Chords />
        </div>
      )
    }

  // <img src='http://www.piano-play-it.com/images/Piano-chord-chart.png' />
  // <Selector />
export default Main;

