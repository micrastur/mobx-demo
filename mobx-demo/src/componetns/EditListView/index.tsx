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

        console.log(isEditedTodo);
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
        const changedData = {[key]: value}  as Pick<ToDoItem, keyof SetStateTask>;
        this.setState({
            options: Object.assign({}, this.state.options, changedData)
       } as EditState);
    }

    handleItemChange() {
        const { options, isNewMode } = this.state;
        console.log(options);
        this.props.toDoStore!.setToDoOptions(options, this.state.options.id)
    }

    render() {
        const isEditMode = this.props.toDoStore!.getEditMode;
        let {options: {task, completed}} = this.state;
        console.log('isNewEditMode', isEditMode);
        return (
            <>
                {this.props.toDoStore!.getEditMode && 
                    <EditList isNewMode={isEditMode}>
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
                        {isEditMode && <EditListClose onClick={() => this.props.toDoStore!.setEditMode()}/>}
                    </EditList>
                }
            </>
        )    
    }
}