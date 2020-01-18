import React from 'react';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{

//     render(){
//         return(
//             <div>
                
//                 <MoviePosterFunctional poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
                
//             </div>
//         );
        
//     }
        
    
// }

function Movie({title, poster, key, genres, synopsis}){

    return(
        <div className="Movie">
            <div className="Movie__Columns">

                <MoviePosterFunctional poster={poster} alr={title} title={title}/>

            </div>

            <div className="Movie__Columns">

                <h1 className="Movie__title">{title}</h1>

                <div className="Movie__Genres">
                    {genres.map((genre, index)=><MovieGenres genre={genre} key={index} />)}
                </div>

                <p className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                    
    
                </p>

            </div>


        </div>

    )

}

function MovieGenres({genre}){
    return(
        <span className="Movie__Genre"> {genre} </span>
    )
}


// class MoviePoster extends Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.poster} />

//             </div>
//         );
//     }
// }



// functional redner은 라이프싸이클과 state가 없다.
// props는 받을 수 있다.
function MoviePosterFunctional({poster, title}){
    return(
        <div className="Movie__Poster">
            <img src={poster} alt={title} title={title}/>

        </div>
    );
}


export default Movie;