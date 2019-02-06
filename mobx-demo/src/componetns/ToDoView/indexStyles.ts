import styled from "styled-components";
import { CompleteInterface } from "../../interface/interface";
export {
    TodoViewWrapper,
    TodoViewItemWrap,
    TodoViewItem,
    TodoViewItemName,
    TodoViewItemButton
};

const TodoViewWrapper = styled.ul`
    margin: 0;
    padding: 0 20px;
    list-style-type: none;
`

const TodoViewItemWrap = styled.div`
    border-bottom: 1px solid #e2e2e2;
`

const TodoViewItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 0;
    width: 100%;
`

const TodoViewItemName = styled.span`
    width: 100%;
    position: relative;
    margin-right: 5px;
    ${({ isCompleted}: CompleteInterface) => isCompleted && `
        ::before {
            content: '';
            position: absolute;
            top: 9px;
            width: 100%;
            display: block;
            border-top: 1px solid #424242;
        }
    `}
`

const TodoViewItemButton = styled.button`
    display: inline-block;
    width: 60px;
    height: 30px;
    border: none;
    background-color: #539e64;
    color: #fff;
    text-align: center;
    padding: 0;
    justify-content: right;
    margin-left: auto;
`