import React, {Component} from 'react'
import Animals from './animals'
import Home from './home'
import Chords from './chordList'

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: '1'
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onHomeClick = this._onHomeClick.bind(this);
    this._onChartClick = this._onChartClick.bind(this);
  }

  _onHomeClick() {
    this.setState({
      showComponent: '1',
    });
  }

  _onButtonClick() {
    this.setState({
      showComponent: '2',
    });
  }


  _onChartClick() {
    this.setState({
      showComponent: '3',
    });
  }

  render () {
    return (
      <div>
      <div className="circle"></div>
      <h1 onClick={this._onHomeClick}><span>Musical</span><br/><span>Guessing</span><br/><span>Zoo</span></h1>
        <nav className='head'>
          <div className='navBtns'>
            <button className="huge ui blue button" onClick={this._onHomeClick} role="button">Home</button>
            <button className="huge ui violet button" onClick={this._onButtonClick} role="button"> Play</button>
            <button className="huge ui teal button" onClick={this._onChartClick} role="button">Chords</button>
          </div>
        </nav>
        <hr />
        {this.state.showComponent === '1' ?
          <Home /> :
          null
        }
        {this.state.showComponent === '2' ?
          <Animals /> :
          null
        }
        {this.state.showComponent === '3' ?
          <Chords /> :
          null
        }
        </div>
        )
      }
    }

export default Main;

