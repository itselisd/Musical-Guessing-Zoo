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
            Welcome to the Musical Guessing Zoo!
              <br/>
              All our animals have names that start with the letter of the musical note they love the most.
              <br/>
              You'll see three animals at a time and guess which chord the first letters of their names make.
              <br/>
              Watch out for the sharks in our zoo though!
              <br/>
              If you see a great white baring its teeth under an animal that means its note is sharp(#) or flat(b) if there's a hammerhead swimming underneath.
              <br/>
            </p>
          </div>
        </div>
        )
      }
    }

export default Home;
