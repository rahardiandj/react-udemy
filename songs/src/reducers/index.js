import { combineReducers } from 'redux';

const songReducers = () => {
    return [
        {title:'No Scrubs', duration : '4:05'},
        {title: 'Macarena', duration : '2:30'},
        {title: 'All Start', duration: '3:15'},
        {title:'I Want It That Way', duration:'4:15'}
    ];
}

const selectedSongReducer = (selectedSong=null, action) => {

    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

combineReducers({
    songs: songReducers,
    selectedSong: selectedSongReducer
});

