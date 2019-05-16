import React from 'react';


//import CommentSection from './components/CommentSection/CommentSection';
import withAuthenticate from './components/Authentication/withAuthenticate';
import dummyData from './dummy-data';
import LoginPage from './components/Login/LoginPage';
import PostPage from './components/PostContainer/PostPage';

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profiles: []
    };
  }
  componentDidMount (){
    this.setState({profiles: dummyData})
  }
  
  render () {
    return(
      <PostPage profiles={this.state.profiles}/>
    );
  }
}

export default withAuthenticate(App)(LoginPage);