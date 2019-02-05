import * as React from 'react'
import { ToDoItem, ToDoStore, EditState } from "../../interface/interface";
import { inject, observer } from 'mobx-react';
import { EditList, EditListCheckbox, EditListАictiveCheckbox, EditListLabel, EditListSection, EditListTaskName, EditListChangeBtn, EditListClose } from './indexStyle';
interface SetStateTask {
    task: string,
    completed: boolean,
}
type StateKeys = keyof SetStateTask;

@inject("toDoStore")
@observer
export default class  EditListView extends React.Component<ToDoStore, EditState> {
    state = {
        options: {
            id: 0,
            task: '',
            completed: false
        },
        isNewMode: false
    }

    componentDidMount(){
        const editedTodo = this.props.toDoStore!.getEditedTodo(),
            isEditedTodo = editedTodo.id;

        console.log(editedTodo);
        let initialState = {
            id: this.props.toDoStore!.getToDoList().length - 1,
            task: '',
            completed: false
        };

        if(isEditedTodo) {
            const {task, completed} = editedTodo;
            initialState.task = task;
            initialState.completed = completed;
        }
        this.setState({
            options: initialState,
            isNewMode: !isEditedTodo
        } as EditState);
    }

    onFieldChange(key: StateKeys, value: string|boolean) {
        console.log(value);
        this.setState({
            options: {
                [key]: value
            } as Pick<ToDoItem, keyof SetStateTask>
       } as EditState);
    }

    handleItemChange() {
        const { options, isNewMode } = this.state;
        this.props.toDoStore!.setToDoOptions(options, this.state.options.id)
    }

    render() {
        let {options: {task, completed}, isNewMode} = this.state;
        console.log('isNewEditMode', isNewMode);
        return (
            <>
                <EditList isNewMode={isNewMode}>
                    <div>
                        Task name: 
                        <EditListTaskName type="text"
                            value={task}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {this.onFieldChange('task', e.currentTarget.value)}}/>
                    </div>
                    <EditListSection>
                        Completing task status: 
                            <EditListLabel>
                                <EditListCheckbox
                                    type='checkbox'
                                    checked={completed}
                                    onChange={() => {this.onFieldChange('completed', !completed)}}
                                />
                                <EditListАictiveCheckbox></EditListАictiveCheckbox>
                            </EditListLabel>
                    </EditListSection>
                    <EditListChangeBtn onClick={() => {this.handleItemChange()}}>
                        Apply changes
                    </EditListChangeBtn>
                    {isNewMode && <EditListClose/>}
                </EditList>
            </>
        )    
    }
}