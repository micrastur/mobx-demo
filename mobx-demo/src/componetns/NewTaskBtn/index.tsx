import * as React from 'react';
import { CreateBtn } from './indexStyle';
import { inject, observer } from 'mobx-react';
import { ToDoStore } from '../../interface/interface';
 

@inject("toDoStore")
@observer
class NewTaskBtn extends React.Component<ToDoStore> {

    handleEditView() {
        this.props.toDoStore!.setEditorState(true, false);
    }

    render() {
        const {isEditorOpened} = this.props.toDoStore!.editorStateOption;
        return (
            !isEditorOpened && <CreateBtn onClick={() => this.handleEditView()}/>
        );
    }
}
 
export default NewTaskBtn;