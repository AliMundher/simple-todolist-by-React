
import './App.css';
import React from 'react';
import DisplayItems from './components/todoitems/todoitems';
import AddItems from './components/additem/additeme';
class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "monther", age: 20 },
      { id: 2, name: "ali", age: 25 },
      { id: 3, name: "saeed", age: 30 }
    ]
  };
  // Delete Function
  delete = (id) => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items })
  }

  // Add Item Function
  addItem = (item) => {
    item.id = Math.floor(Math.random() * 100);
    let newItems = this.state.items;
    newItems.push(item);
    this.setState({ newItems })
  }

  render() {
    return (
      <div className="App container" >
        <h2 className="center">to do list app</h2>
        <DisplayItems items={this.state.items} deleteitem={this.delete} />
        <AddItems additem={this.addItem} />
      </div>
    );
  }
}

export default App;
