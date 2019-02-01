import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { ToDoStore } from '../../interface/interface';
import './Header.css';

@inject("toDoStore")
@observer
export default class Header extends Component<ToDoStore> {
  render() {
    return (
      <div className="todo__header">
        <h1 className="todo__header-title">
            My Todlist
        </h1>
        <span className="todo__header-status">
            { this.props.toDoStore!.report }
        </span>
      </div>
    )
  }
}
