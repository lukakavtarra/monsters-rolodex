import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state)
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
    
  render() {
    // console.log('render')
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className='App'>
        <SearchBox 
        onSearchHandler = {onSearchChange} 
        placeholder = {'Search Monsters'} 
        className = {'search-box'}/>
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
