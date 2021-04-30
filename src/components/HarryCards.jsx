import {Component} from 'react';

class HarryCards extends Component{
  render(){
    const {personagem} = this.props;
    const { name, image, actor, house } = personagem;
    return(
      <div className="movie-card-body">
        <img className="movie-card-image"  src={image} alt="Foto do Personagem" />
        <h2 className="movie-card-title">{name}</h2>
        <h3 className="movie-card-subtitle">Ator: {actor}</h3>
        <h4 className="movie-card-storyline">Casa: {house}</h4>
        <p className="movie-card-rating"></p>
      </div>
    );
  }
}

export default HarryCards;