import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    const { item, toggleItem, onRemove } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => toggleItem(item)}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={() => onRemove(item)}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
