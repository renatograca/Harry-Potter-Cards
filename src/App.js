import './App.css';
import HarryList from './components/HarryList';
import {Component} from 'react';
import ApiHarry from './ApiHarry';

class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      personagens: [],
    }
  }
  async componentDidMount(){
    const response = await ApiHarry.get('');
    this.setState({personagens: response.data})
  }

  render(){
    const {personagens} = this.state;
    console.log(personagens);
    return (
      <div className="App">
        <header className="movie-card-header">
          <h1 className="page-title">Harry Potter Cards</h1>
        </header>
        <div className="movie-list">
          {personagens.map((personagem) => <HarryList key={personagem.name} personagem={personagem} />)}
        </div>
      </div>
    );
  }
}

export default App;
