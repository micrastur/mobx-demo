import * as React from 'react';
import { CreateBtn } from './indexStyle';
import { inject, observer } from 'mobx-react';
import { ToDoStore } from '../../interface/interface';
 

@inject("toDoStore")
@observer
class NewTaskBtn extends React.Component<ToDoStore> {

    setEditMode() {
        this.props.toDoStore!.setEditMode();
    }

    render() {
        
        return (
            <CreateBtn onClick={() => this.setEditMode()}/>
        );
    }
}
 
export default NewTaskBtn;