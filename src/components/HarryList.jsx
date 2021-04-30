import {Component} from 'react';
import HarryCards from './HarryCards';

class HarryList extends Component{
  render(){
    const {personagem}= this.props
    return (
      <div className="movie-card">
       <HarryCards personagem={personagem} />
      </div>
    );
    
  };
}

export default HarryList;