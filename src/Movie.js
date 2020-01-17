import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{

    render(){
        return(
            <div>
                
                <MoviePoster title={this.props.title} poster={this.props.poster} />
                
            </div>
        )
        
    }
        
    
}


class MoviePoster extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} />

            </div>
        )
    }
}


export default Movie;