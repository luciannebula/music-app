import React from 'react';
import { addSongs } from './networkRequests';


class AddSong extends React.Component {
    state = {
        song_name: "",
        artist: "",
        duration: "",
        track_listing: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = () => {
        addSongs(this.state);
    }

    render() {
        return (
            <div className="add-song-wrap">
                <h1>SONG CHEST</h1>
                <div className='row'>
                    <label>Song name: </label>
                    <input onChange={this.handleChange} name="song_name"></input>
                </div>

                <div className="row">
                    <label>Artist: </label>
                    <input onChange={this.handleChange} name="artist"></input>
                </div>

                <div className="row">
                    <label>Duration: </label>
                    <input onChange={this.handleChange} name="duration"></input>
                </div>

                <div className="row">
                    <label>Track Listing: </label>
                    <input onChange={this.handleChange} name="track_listing"></input>
                </div>
                <button onClick={this.onClick}>Submit</button>
            </div>
        )
    }
}

export default AddSong;