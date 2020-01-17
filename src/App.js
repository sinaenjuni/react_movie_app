import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie.js';

//자바스크립트 안에 HTML이 있는 형태 = JSX
class App extends Component {
  // component의 라이프싸이클
  // Render : componentWillMount -> render -> componentDidMount

  // Update : componentReceiveProps    (컴포넌트가 새로운 props를 받는시점)
  //          -> shouldComponentUpdata (이전의 props와 새로운 props가 다르면 update==True)
  //          -> componentWillUpdate   (로딩중의 표현) 
  //          -> render 
  //          -> componentDidUpdate    (로딩중 숨김)


  // component안에 state가 변경될 때마다 render가 발생
  state = {
    greeting : "hello!",

    movies : [
      {
        title: "괴물",
        poster: "https://buckstorrent5.site/data/file/mov1/thumb-4848_0_500x713.jpg"
      },
      {
        title: "악인전",
        poster: "https://buckstorrent5.site/data/file/mov1/thumb-4841_0_500x715.jpg"
      },
      {
        title: "표적",
        poster: "https://buckstorrent5.site/data/file/mov1/thumb-4836_0_500x715.jpg"
      },
      {
        title: "사자",
        poster: "https://bubbletorrent5.xyz/data/file/mov1/thumb-4886_0_500x716.jpg"
      }
    ]

  }


  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
      console.log("did mount");

      setTimeout(()=>{
        this.setState({
          greeting : "hello again",

          movies:[
            ...this.state.movies,
            {
              title: "사자",
              poster: "https://bubbletorrent5.xyz/data/file/mov1/thumb-4886_0_500x716.jpg"
            }
          ]
        });
      }, 5000);
  }

  render(){
    console.log("render")

    return (
      
      <div className="App">
        {this.state.greeting}

        {this.state.movies.map((movie, index)=>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      
      </div>
    );

  }
}

//모든 component는 render function을 가지고 있다.

export default App;
 