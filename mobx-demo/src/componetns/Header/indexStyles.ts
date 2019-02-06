import styled, {ThemedStyledFunction} from 'styled-components';
export {
    HeaderWrapper,
    HeaderTitle,
    HeaderStatus,
    ProgressBar,
    HeaderStatusTitle
};

const HeaderWrapper = styled.header`
border-bottom: 1px solid #e2e2e2;
    padding: 20px 20px 0;
    text-align: center;
`

const HeaderTitle = styled.h1`
    margin: 0;
    font-size: 20px;
`

const HeaderStatus = styled.div`
    background-color: #e2e2e2;
    border-radius: 50px;
    text-align: left;
    padding: 5px;
    margin: 20px 0;
    height: 30px;
    width: 100%;
`

const HeaderStatusTitle = styled.span`
    padding-left: 8px;
    line-height: 1.3;
    color: #fbfbfb;
`

interface Props {
    progress: number;
}

const ProgressBar = styled.span`
    width: ${({progress}: Props) => progress}%;
    display: block;
    height: 100%;
    border-radius: 50px;
    background-color: #539e64;
`
