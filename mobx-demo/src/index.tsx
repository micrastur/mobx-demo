import {Provider} from 'mobx-react';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { observableTodoStore } from './store/toDoList.store';
import TodoList from './componetns/ToDoList';
import EditListView from './componetns/EditListView';
import {GlobalStyle} from './indexStyles';
import NewTaskBtn from './componetns/NewTaskBtn';

ReactDOM.render(
    <Provider toDoStore={observableTodoStore}>
    
        <>
            <GlobalStyle />
            <TodoList />
            <NewTaskBtn>
                <EditListView />
            </NewTaskBtn>
        </>
        
    </Provider>,
    document.getElementById('todo') as HTMLElement
);