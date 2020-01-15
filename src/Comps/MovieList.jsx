import React, { Component } from 'react';
import HOC from './HOC'
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[{name:"Goodfellas",image:"https://d3tudoxwnizvk7.cloudfront.net/keyart-jpeg/goodfellas_keyart.jpg",rate:"★★★★★"},
            {name:"Once upon a time in Hollywood",image:"https://img4.cdn.cinoche.com/images/49db890fd842f74bdf16ee8ee4b529fe.jpg",rate:"★★★★✩"},
        {name:"Serenity",image:"http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/serenity-affiche.png?1553942302",rate:"★★★✩✩"}]
         }
    }
    render() { 
        return ( <div >
            <h1>Movie List</h1>
            <div className="movies">
            {this.state.list.map(el=>
                <div className="movie">
                    <p><strong>Name: </strong>{el.name}</p>
                    <p><strong>Rating: </strong>{el.rate}</p>
                    <img alt={el.name} src={el.image} className="movie-image"/>

                </div>)}
                </div>
        </div> );
    }
}
 
export default HOC(MovieList);