import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { ToDoStore } from '../../interface/interface';
import {
    HeaderWrapper,
    HeaderTitle,
    HeaderStatus,
    ProgressBar,
    HeaderStatusTitle
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
    return (
        <HeaderWrapper>
            <HeaderTitle>
                To do list
            </HeaderTitle>
            <HeaderStatus>
                { !progress &&
                    <HeaderStatusTitle>
                        Progress
                    </HeaderStatusTitle>
                }
                <ProgressBar
                    progress={progress}
                >
                </ProgressBar>
            </HeaderStatus>
        </HeaderWrapper>
    )
  }
}
