import {Provider} from 'mobx-react';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observableTodoStore } from './store/toDoList.store';
import TodoList from './componetns/ToDoList';
import EditListView from './componetns/EditListView';
import {GlobalStyle} from './indexStyles';

ReactDOM.render(
    <Provider toDoStore={observableTodoStore}>
    
        <div className="todo">
            <GlobalStyle />
            <TodoList />
            <EditListView />
        </div>
        
    </Provider>,
    document.getElementById('root') as HTMLElement
);