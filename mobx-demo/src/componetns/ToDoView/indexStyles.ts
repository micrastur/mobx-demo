import styled from "styled-components";
export {
    TodoViewWrapper,
    TodoViewItemWrap,
    TodoViewItem,
    TodoViewItemCheckbox,
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

interface CompleteInterface {
    isCompleted: boolean
}

const TodoViewItemCheckbox = styled.span`
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid #e2e2e2;
    margin-right: 15px;

        ::before {
            content: '';
            display: none;
            width: 8px;
            height: 15px;
            border: 1px solid #539e64;
            border-width: 0 1px 1px 0;
            transform: rotate(45deg);
        }
    ${({ isCompleted}: CompleteInterface) => isCompleted && `
        border: none;
            ::before {
                display: inline-block;
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