import styled from "styled-components";
export {
    CreateBtn,
    CreateBtnWrap
}

const CreateBtn = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-color: #539e64;
    position: relative;
    margin-top: -45px;

    ::before {
        content: '+';
        height: 70px;
        font-size: 60px;
        line-height: 1em;
        font-weight: 100;
        color: #ffffff;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
    }
`

const CreateBtnWrap = styled.div`
    position: relative;
`