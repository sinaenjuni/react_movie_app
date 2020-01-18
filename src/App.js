import React, { Component } from 'react';
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
  state = { }


  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
      console.log("did mount");

      this._getMovies();

      
  } 


  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
     movies
    })
  }


  _callApi = () =>{
    const result = fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err=>console.log(err))
    
    return result
  }


  _renderMovies = () =>{
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} genres={movie.genres} synopsis={movie.synopsis}/>
    });

    return movies;
  }



  render(){
    console.log("render")
    const { movies } = this.state;
    return (
      
      <div className={movies ? "App" : "App--loading"}>
        
        {this.state.movies ? this._renderMovies() : 'Loading'}
      
      </div>
    );

  }
}

//모든 component는 render function을 가지고 있다.

export default App;
 