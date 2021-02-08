import React, { Component } from 'react';
import giphy from '../../api/giphy'
import SearchBar from '../SearchBar';
import GifList from '../GifList';
import PopupGif from '../PopupGif';

import './app.scss';

class App extends Component {
    state = { gifs: [], selectedGif: null, term: "" };

    componentDidMount(){
        window.addEventListener('scroll', this.loadMore);
    }
      
    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadMore);
    }
    
    loadMore = async () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            const response = await giphy.get('/search', {
                params: {
                    q: this.state.term,
                    offset: this.state.gifs.length
                }
            });

            this.setState({
                gifs: this.state.gifs.concat(response.data.data),
            });
        }
    }

    onTermSubmit = async term => {
        const response = await giphy.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            gifs: response.data.data,
            term,
        });
    };

    onGifSelect = gif => {
        this.setState({
            selectedGif: gif
        });
    }

    onPopupClose = () => {
        this.setState({
            selectedGif: null
        })
    }

    render(){
        return (
            <div className="ui container App-container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui horizontal divider"></div>
                <GifList gifs={this.state.gifs} onGifSelect={this.onGifSelect}/>
                {this.state.selectedGif ? <PopupGif gif={this.state.selectedGif} onPopupClose={this.onPopupClose}/> : null}
            </div>
        )
    }
}

export default App;