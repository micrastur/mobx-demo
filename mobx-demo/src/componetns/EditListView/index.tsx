import * as React from 'react'
import { ToDoItem, ToDoStore } from "../../interface/interface";
import { inject, observer } from 'mobx-react';
import { EditList, EditListCheckbox, EditListАictiveCheckbox, EditListLabel, EditListSection, EditListTaskName, EditListChangeBtn, EditListClose } from './indexStyle';
import { when } from 'q';
interface SetStateTask {
    task: string,
    completed: boolean,
}
type StateKeys = keyof SetStateTask;

@inject("toDoStore")
@observer
export default class  EditListView extends React.Component<ToDoStore, ToDoItem> {
    constructor(props: ToDoStore) {
        super(props);
        this.state = {
            id: this.props.toDoStore!.toDoList.length,
            task: '',
            completed: false
        }
    }

    componentDidUpdate(previousProps: ToDoStore, previousState: ToDoItem){
        const { editedTodoItem, editorStateOption: { isUpdatedMode }} = previousProps.toDoStore!,
            { id } = this.state;
        if (isUpdatedMode && editedTodoItem.id !== id) {
            this.setState({
                id: editedTodoItem.id,
                task: editedTodoItem.task,
                completed: editedTodoItem.completed
            })
        }
    }

    onFieldChange(key: StateKeys, value: string|boolean) {
        this.setState({
            [key]: value
       } as Pick<ToDoItem, keyof SetStateTask>)
    }

    handleItemChange() {
        const { id } = this.state;
        this.props.toDoStore!.setToDoOptions(this.state, id);
        this.resetOptions();
    }

    resetOptions() {
        this.props.toDoStore!.setEditorState(false, false);
        this.setState({
            id: this.props.toDoStore!.toDoList.length,
            task: '',
            completed: false
        });
    }

    render() {
        const {
            isEditorOpened,
            isUpdatedMode
        } = this.props.toDoStore!.editorStateOption;
        let {task, completed} = this.state;
        return (
            <>
                {isEditorOpened && 
                    <EditList>
                        <div>
                            Task name: 
                            <EditListTaskName type="text"
                                value={task}
                                onChange={
                                    (e: React.ChangeEvent<HTMLInputElement>) => {
                                        this.onFieldChange('task', e.currentTarget.value)
                                    }
                                }
                            />
                        </div>
                        <EditListSection>
                            Completing task status: 
                                <EditListLabel>
                                    <EditListCheckbox
                                        type='checkbox'
                                        checked={completed}
                                        onChange={
                                            () => this.onFieldChange('completed', !completed)
                                        }
                                    />
                                    <EditListАictiveCheckbox/>
                                </EditListLabel>
                        </EditListSection>
                        <EditListChangeBtn onClick={() => {this.handleItemChange()}}>
                            Apply changes
                        </EditListChangeBtn>
                        <EditListClose onClick={() => this.resetOptions()}/>
                    </EditList>
                }
            </>
        )    
    }
}