import styled from "styled-components";
export {
    EditList,
    EditListSection,
    EditListLabel,
    EditListCheckbox,
    EditListАictiveCheckbox,
    EditListTaskName,
    EditListChangeBtn,
    EditListClose
};

interface NewMode {
    isNewMode: boolean
}

const EditList = styled.div`
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
    color: #539e64;
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 380px;
    margin-left: -190px;
    background-color: #fcfcfc;
    box-shadow: 0 0 13px #e2e2e2;
    padding: 20px;
`

const EditListSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const EditListLabel = styled.label`
    display: inline-block;
    margin-left: 15px;
`

const EditListCheckbox = styled.input`
    display: none;

    &:checked + .fakeLabel {
        ::before {
            display: inline-block;
        }
    }
`

const EditListАictiveCheckbox = styled.span.attrs({
    className: 'fakeLabel'
})`
    display: block;
    position: relative;
    width: 18px;
    height: 18px;
    border: 1px solid #e2e2e2;
    margin-right: 15px;

    ::before {
        content: '';
        display: none;
        position: absolute;
        bottom: 5px;
        left: 6px;
        width: 10px;
        height: 24px;
        border: 1px solid #539e64;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg);
    }
`

const EditListTaskName = styled.input`
    display: block;
    border: none;
    background-color: #fbfbfb;
    margin: 10px 0 15px;
    font-size: 16px;
    line-height: 1.5;
    border-bottom: 1px solid #e2e2e2;
    width: 100%;
    color: #424242;
    cursor: pointer;

    :focus {
        outline: none;
    }
`

const EditListChangeBtn = styled.button`
    display: block;
    width: 100px;
    margin: 0 auto;
    height: 30px;
    border: none;
    color: #fbfbfb;
    background-color: #509f61;
`

const EditListClose = styled.span`
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    margin: 10px;
    border: 1px solid #a0a0a0;
    border-radius: 50px;
    cursor: pointer;

    ::before {
        content: 'x';
        position: absolute;
        left: 5px;
        font-weight: 100;
        color: #a0a0a0;
        text-align: center;
    }
`