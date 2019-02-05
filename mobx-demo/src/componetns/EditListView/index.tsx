import * as React from 'react'
import { ToDoItem, ToDoStore } from "../../interface/interface";
import { inject, observer } from 'mobx-react';
import { EditList, EditListCheckbox, EditListАictiveCheckbox, EditListLabel, EditListSection, EditListTaskName, EditListChangeBtn } from './indexStyle';
interface SetStateTask {
    task: string,
    completed: boolean,
}
type StateKeys = keyof SetStateTask;

@inject("toDoStore")
@observer
export default class  EditListView extends React.Component<{toDoId?: number} & ToDoStore, ToDoItem> {
    constructor(props: {toDoId?: number} & ToDoStore){
        super(props);
        this.state = {
            id: this.props.toDoId || this.props.toDoStore!.todos.length - 1,
            task: '',
            completed: false,
            editable: false,
        }
    }

    componentDidMount(){
        const isToDoEdited = this.props.toDoId != undefined;
        let initialState = {};

        if(isToDoEdited) {
            const {task, completed} = this.props.toDoStore!.todos[this.props.toDoId!]
            initialState = {
                task,
                completed
            }
        }
        this.setState(initialState);
    }

    onFieldChange(key: StateKeys, value: string|boolean) {
        console.log(value);
        this.setState({
          [key]: value,
       } as Pick<ToDoItem, keyof SetStateTask>);
    }

    handleItemChange() {
        const options = this.state;
        this.props.toDoStore && this.props.toDoStore.setToDoOptions(options, this.state.id)
    }

    render() {
        let {task, completed} = this.state;
        
        return (
            <>
                {/* {(task || !this.props.todo) && */}
                    <EditList>
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
                        <div>
                            Task name: 
                            <EditListTaskName type="text"
                                value={task}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {this.onFieldChange('task', e.currentTarget.value)}}/>
                        </div>
                        <EditListChangeBtn onClick={() => {this.handleItemChange()}}>
                            Apply changes
                        </EditListChangeBtn>
                    </EditList>
                {/* } */}
            </>
        )    
    }
}