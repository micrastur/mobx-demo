import * as React from 'react';
import { CreateBtn, CreateBtnWrap } from './indexStyle';
export interface Props {
    children: React.ReactNode
}
 
export interface State {
    isBtnClicked: boolean
}
 
class NewTaskBtn extends React.Component<Props, State> {
    state = {
        isBtnClicked: false
    }

    setCkickedProp() {
        const { isBtnClicked } = this.state;
        this.setState({
            isBtnClicked: !isBtnClicked
        });
    }

    render() {
        const createTaskView = this.state.isBtnClicked
            ? this.props.children
            : <CreateBtn onClick={() => this.setCkickedProp()}/>
        return (
            <CreateBtnWrap>
                {createTaskView}
            </CreateBtnWrap>
        );
    }
}
 
export default NewTaskBtn;