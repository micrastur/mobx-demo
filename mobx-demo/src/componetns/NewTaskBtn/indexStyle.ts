import styled from "styled-components";
export {
    CreateBtn
}

const CreateBtn = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    background-color: #539e64;
    position: absolute;
    bottom: -45px;
    left: 50%;
    margin-left: -45px;

    ::before {
        content: '+';
        height: 56px;
        line-height: 46px;
        font-size: 60px;
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