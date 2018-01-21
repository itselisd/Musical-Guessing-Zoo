import React, {Component} from 'react'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render () {
    return (
      <div>
          <div className="content">
            <p className='welcome'>
              <em>Welcome to the Musical Guessing Zoo!</em>
              <br/>
              Play the game where all animals have names that start with the letter of the musical note they love the most.
              <br/>
              You will see three animals at a time and guess which chord the first letters of their names make.
              <br/>
              Watch out for the sharks in our zoo though!
              <br/>
              If you see a great white baring its teeth under an animal that means its note is <em>sharp(#).</em>
              <br/>
              If there is a hammerhead swimming underneath, its note is <em>flat(b)</em>.
              <br/>
            </p>
          </div>
        </div>
        )
      }
    }

export default Home;
