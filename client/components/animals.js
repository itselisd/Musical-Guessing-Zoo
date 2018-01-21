import React, { Component } from 'react'
var Tone = require("Tone")
var chorus = new Tone.Chorus(4, 2.5, 0.5).toMaster();
var freeverb = new Tone.Freeverb().toMaster();
var dist = new Tone.Distortion(0.4).toMaster();
freeverb.dampening.value = 400;
freeverb.roomSize.vallue = 0.3;
var synth = new Tone.PolySynth(4, Tone.MonoSynth)
.connect(chorus)
.connect(freeverb)
.connect(dist);

let animalImgs = {
  C: {
    1: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      note: 'C'
    },
    3: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant',
      note: 'E'
    },
    5: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe',
      note: 'G'
    }
  },
  'C#': {
      1: {
        img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
        name: 'Caterina the Cat',
        sharp: true,
        note: 'C#'
      },
      3: {
        img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
        name: 'Eeyore the Elephant',
        sharp: true,
        note: 'E#'
      },
      5: {
        img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
        name: 'Geoffrey the Giraffe',
        sharp: true,
        note: 'G#'
      }
  },
  D: {
    1: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog',
      note: 'D'
    },
    3: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      sharp: true,
      note: 'F#'
    },
    5: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater',
      note: 'A'
    }
  },
  Eb: {
    1: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant',
      flat: true,
      note: 'Eb'
    },
    3: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe',
      note: 'G'
    },
    5: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear',
      flat: true,
      note: 'Bb'
    }
  },
  E: {
    1: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant',
      note: 'E'
    },
    3: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe',
      sharp: true,
      note: 'G#'
    },
    5: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear',
      note: 'B'
    }
  },
  F: {
    1: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      note: 'F'
    },
    3: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater',
      note: 'A'
    },
    5: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      note: 'C'
    }
  },
  'F#': {
    1: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      sharp: true,
      note: 'F#'
    },
    3: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater',
      sharp: true,
      note: 'A#'
    },
    5: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      sharp: true,
      note: 'C#'
    }
  },
  G: {
    1: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe',
      note: 'G'
    },
    3: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear',
      note: 'B'
    },
    5: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog',
      note: 'D'
    }
  },
  Ab: {
    1: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater',
      flat: true,
      note: 'Ab'
    },
    3: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      note: 'C'
    },
    5: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant',
      flat: true,
      note: 'Eb'
    }
  },
  A: {
    1: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater',
      note: 'A'
    },
    3: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      sharp: true,
      note: 'C#'
    },
    5: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant',
      note: 'E'
    }
  },
  Bb: {
    1: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear',
      flat: true,
      note: 'Bb'
    },
    3: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog',
      note: 'D'
    },
    5: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      note: 'F'
    }
  },
  B: {
    1: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear',
      note: 'B'
    },
    3: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog',
      sharp: true,
      note: 'D#'
    },
    5: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      sharp: true,
      note: 'F#'
    }
  },
}

const randomChord = function() {
  let chordArr = Object.keys(animalImgs);
  let chord = chordArr[Math.floor(Math.random()*chordArr.length)];
  return chord;
}

function shuffle() {
  let array = ['1', '3', '5']
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class Animals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChord: null,
      right: 0,
      total: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.imgClick = this.imgClick.bind(this);
    this.chordClick = this.chordClick.bind(this);
  }

  componentWillMount () {
    let chord = randomChord()
    this.setState({currentChord: chord});
  }
  handleClick(event) {
    event.preventDefault()
    let el = event.target;
    let curr = this.state.currentChord;
    if (el.value === curr) {
      document.getElementsByClassName('guess')[0].innerText = `You got it! That was the ${curr} chord.`;
      this.setState({right: this.state.right + 1})
    } else {
      document.getElementsByClassName('guess')[0].innerText = `Sorry, that was the ${curr} chord.`;
    }
    this.setState({total: this.state.total + 1})
    let chord = randomChord();
    this.setState({currentChord: chord});
  }

  imgClick(event) {
    event.preventDefault();
    let note = event.target.id;
    synth.triggerAttackRelease(`${note}3`, "8n");
  }

  chordClick(event) {
    event.preventDefault();
    let note = event.target.value.split(',');
    synth.triggerAttackRelease([`${note[0]}3`,`${note[1]}3`,`${note[2]}3`], "8n");
  }

  render () {
    let animal = animalImgs[this.state.currentChord]
    let shark = <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/58616-200.png' />
    let flat = <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/6430-200.png' />
    let shuffledArr = shuffle()
    return (
        <div>
          <div id='guessCounter' className='welcome'>
            <div>
              {this.state.total > 0 ? (this.state.right + ' / ' + this.state.total) : null}
            </div>
            <div className="ui labeled icon buttons">
              <button value={[animal[shuffledArr[0]].note, animal[shuffledArr[1]].note, animal[shuffledArr[2]].note]} onClick={this.chordClick} className="ui button">
              <i className="play icon"></i>
                Play the Chord
              </button>
            </div>
          </div>
          <div className='guess welcome'>
            Which chord do these animals represent?
          </div>
          <div className='chordBtns'>
            <button className="huge ui orange button" value='C' onClick={this.handleClick}>C</button>
            <button className="huge ui orange button" value='C#' onClick={this.handleClick}>C#</button>
            <button className="huge ui teal button" value='D' onClick={this.handleClick}>D</button>
            <button className="huge ui purple button" value='Eb' onClick={this.handleClick}>Eb</button>
            <button className="huge ui purple button" value='E' onClick={this.handleClick}>E</button>
            <button className="huge ui brown button" value='F' onClick={this.handleClick}>F</button>
            <button className="huge ui brown button" value='F#' onClick={this.handleClick}>F#</button>
            <button className="huge ui yellow button" value='G' onClick={this.handleClick}>G</button>
            <button className="huge ui violet button" value='Ab' onClick={this.handleClick}>Ab</button>
            <button className="huge ui violet button" value='A' onClick={this.handleClick}>A</button>
            <button className="huge ui blue button" value='Bb' onClick={this.handleClick}>Bb</button>
            <button className="huge ui blue button" value='B' onClick={this.handleClick}>B</button>
          </div>
        <div className='animals'>
          <div className="flex-grid">
            <div className="col">
              <img className='pics' id={animal[shuffledArr[0]].note} onClick={this.imgClick} src={animal[shuffledArr[0]].img} />
              <figcaption>
                <p className='names'>{animal[shuffledArr[0]].name}</p>
                {animal[shuffledArr[0]].sharp ? shark : null}
                {animal[shuffledArr[0]].flat ? flat : null}
              </figcaption>
            </div>
            <div className="col">
              <img className='pics' id={animal[shuffledArr[1]].note} onClick={this.imgClick} src={animal[shuffledArr[1]].img} />
              <figcaption>
                <p className='names'>{animal[shuffledArr[1]].name}</p>
                {animal[shuffledArr[1]].sharp ? shark : null}
                {animal[shuffledArr[1]].flat ? flat : null}
              </figcaption>
            </div>
            <div className="col">
              <img className='pics' id={animal[shuffledArr[2]].note} onClick={this.imgClick} src={animal[shuffledArr[2]].img} />
              <figcaption>
                <p className='names'>{animal[shuffledArr[2]].name}</p>
                {animal[shuffledArr[2]].sharp ? shark : null}
                {animal[shuffledArr[2]].flat ? flat : null}
              </figcaption>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Animals;
