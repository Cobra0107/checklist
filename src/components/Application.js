import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: true },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items : defaultState
  };

  addNewItem = item => {
    this.setState({ items: [item, ...this.state.items] });
  }

  toggleCheckBox = toggledItem => {
    const items = this.state.items.map(item => {
      if(item.id !== toggledItem.id) {
        return item;
      } 
      return {...toggledItem, packed: !toggledItem.packed};
    }) 

    this.setState({ items })
  }

  removeItem = removedItem => {
    this.setState({
      items: this.state.items.filter(item => item.id !== removedItem.id)
    })
  }

  markAllUnpacked = () => {
    const unpacked = this.state.items.map(single => {
      return {...single, packed: false}
    }) 

    this.setState({ items: unpacked })
  }

  render() {
    const unpackedItems = this.state.items.filter(item => !item.packed)
    const packedItems = this.state.items.filter(item => item.packed)

    return (
      <div className="Application">
        <NewItem onSubmit={this.addNewItem}/>
        {/* <CountDown /> */}
        <Items title="Unpacked Items" 
          items={unpackedItems} 
          toggleItem={this.toggleCheckBox} 
          onRemove={this.removeItem}
          />
        <Items title="Packed Items" items={packedItems} toggleItem={this.toggleCheckBox} onRemove={this.removeItem}/>
        <button className="button full-width" onClick={this.markAllUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
