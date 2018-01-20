import React, { Component } from 'react'

let animalImgs = {
  C: {
    1: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat'
    },
    3: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant'
    },
    5: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe'
    }
  },
  D: {
    1: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog'
    },
    3: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      sharp: true
    },
    5: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater'
    }
  },
  E: {
    1: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant'
    },
    3: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe',
      sharp: true
    },
    5: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear'
    }
  },
  F: {
    1: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox'
    },
    3: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater'
    },
    5: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat'
    }
  },
  G: {
    1: {
      img: 'http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg',
      name: 'Geoffrey the Giraffe'
    },
    3: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear'
    },
    5: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog'
    }
  },
  A: {
    1: {
      img: 'http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg',
      name: 'Amy the Anteater'
    },
    3: {
      img: 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
      name: 'Caterina the Cat',
      sharp: true
    },
    5: {
      img: 'http://assets.worldwildlife.org/photos/11552/images/story_full_width/rsz_namibia_will_burrard_lucas_wwf_us_1.jpg?1462219623',
      name: 'Eeyore the Elephant'
    }
  },
  B: {
    1: {
      img: 'http://www.wikiality.com/file/2016/11/bears1.jpg',
      name: 'Bozo the Bear'
    },
    3: {
      img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg',
      name: 'Diego the Dog',
      sharp: true
    },
    5: {
      img: 'https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/',
      name: 'Freya the Fox',
      sharp: true
    }
  },
}

class Animals extends Component {
  render() {
    return (
      <div className='animals'>
        <div className="flex-grid">
          <div className="col">
            <img src={animalImgs.C['1'].img} />
            <figcaption> {animalImgs.D['1'].name}</figcaption>
          </div>
          <div className="col">
            <img src={animalImgs.C['3'].img} />
            <figcaption> {animalImgs.D['3'].name} </figcaption>
          </div>
          <div className="col">
            <img src={animalImgs.C['5'].img} />
            <figcaption> {animalImgs.D['5'].name} </figcaption>
          </div>
        </div>
      </div>
    )
  }
}

export default Animals;
// https://steamuserimages-a.akamaihd.net/ugc/179411612554599669/6FE4BC34065EAE533D4A9D0D7057E711FA47F576/ - Fox
// http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg - Giraffe
// http://www.wikiality.com/file/2016/11/bears1.jpg - Bear
// http://zoonooz.sandiegozoo.org/wp-content/uploads/2017/03/T17_0055_010.jpg - Aardvark
// 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/475B/production/_98776281_gettyimages-521697453.jpg' - Dog
