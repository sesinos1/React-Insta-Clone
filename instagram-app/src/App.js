import React from 'react';


//import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profiles: dummyData
    };
  }

  render () {
    return(
      <div>
        <SearchBar/>
        <PostContainer profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default App;