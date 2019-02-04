import styled from "styled-components";

const CheckboxStyle = styled.input`
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
`
