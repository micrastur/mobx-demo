import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { ToDoStore } from '../../interface/interface';
import {
    HeaderWrapper,
    HeaderTitle,
    HeaderStatus,
    ProgressBar
} from './indexStyles';

@inject("toDoStore")
@observer
export default class Header extends Component<ToDoStore> {
  render() {
    const { toDoStore } = this.props,
        {totalListItems, completedTodosCount} = toDoStore!;
    const progress = completedTodosCount
        ?  completedTodosCount / totalListItems * 100
        : 0;
    console.log(completedTodosCount, totalListItems);
    return (
        <HeaderWrapper>
            <HeaderTitle>
                To do list
            </HeaderTitle>
            <HeaderStatus>
                <ProgressBar
                    progress={progress}
                >
                </ProgressBar>
            </HeaderStatus>
        </HeaderWrapper>
    )
  }
}
