import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js';

//자바스크립트 안에 HTML이 있는 형태 = JSX
class App extends Component {
  // component의 라이프싸이클
  // render : componentWillMount -> render -> componentDidMount
  
  // update : componentReceiveProps    (컴포넌트가 새로운 props를 받는시점)
  //          -> shouldComponentUpdata (이전의 props와 새로운 props가 다르면 update==True)
  //          -> componentWillUpdate   (로딩중의 표현) 
  //          -> render 
  //          -> componentDidUpdate    (로딩중 숨김)

  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
      console.log("did mount");
  }

  render(){
    console.log("render")
    return (
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );

  }
}

//모든 component는 render function을 가지고 있다.

export default App;
 