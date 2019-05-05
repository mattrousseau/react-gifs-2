import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = "XhN0kQhXMpYSHrD9bGVWjKuKA4FQUHfS";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "3oKIPqjfyrXlGHwvdK",
      gifs: [
        { id: "3oKIPqjfyrXlGHwvdK" },
        { id: "RJVCAKa9FGFnAymkgz" }
      ]
    };
  }

  search = (query) => {
    console.log(query);
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  };


  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search">
            <SearchBar search={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
