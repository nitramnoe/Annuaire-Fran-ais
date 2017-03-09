import React, { Component } from 'react';
import './Grid.css';
import Card from "../Card/Card.jsx";
import './Grid.css';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Input from '../Input/Input.jsx';

class Grid extends Component {
  render() {
    return (
      <div className="grid">
        <Dropdown />
        <Input />
        <Card />
      </div>
    );
  }
}

export default Grid;
